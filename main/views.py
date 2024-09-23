import random
import requests
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from telegram import TOKEN, CHANNEL_ID, GROUP_ID
from .models import *
from django.shortcuts import get_object_or_404
import logging
from .serializers import LeaguesSerializer, TaskPlayerSerializer, SkinSerializer, PlayerTaskSerializer, \
    PlayerSkinSerializer


class Main_info(APIView):
    def get(self, request, tg_id: int, name: str):
        try:
            player = Player.objects.get(tg_id=tg_id)
        except Player.DoesNotExist:
            player = Player.objects.create(tg_id=tg_id, name=name)
            Upgrade.objects.create(player=player)

        # Вычисляем текущий бонус на основе damage и autobot_time
        current_bonus = player.upgrade.autobot_time * player.upgrade.damage + player.upgrade.coin_bonus_result
        # Получаем активный скин игрока
        active_skin = PlayerSkin.objects.filter(player=player, is_active=True).first()
        active_skin_id = active_skin.skin.id if active_skin else None

        info = {"lvl": player.lvl,
                "coin": player.coin,
                "energy_start": player.energy,
                "energy_now": player.now_energy,
                "crystal": player.crystal,
                "flag_autobot": player.upgrade.flag_autobot,
                "timer_autobot": player.upgrade.autobot_time,
                "money_per_tap": player.upgrade.damage,
                "energy_per_tap": player.upgrade.one_tap_energy,
                "coin_bonus_result": player.upgrade.coin_bonus_result,
                "league": player.league.name if player.league else None,
                "current_bonus": current_bonus,
                "boxes_available": player.boxes_available,
                "show_instruction": player.show_instruction,
                "active_skin_id": active_skin_id,
                "tasks": player.tasks,
                "friend_lvl_2": player.friend_lvl_2,
                }

        return Response(info, status=status.HTTP_200_OK)


class Tap_Tap(APIView):
    def post(self, request):
        player = get_object_or_404(Player, tg_id=request.data['tg_id'])
        coin = int(self.request.data['coin'])
        energy = int(self.request.data['energy_now'])
        player.coin += coin
        player.now_energy = energy
        player.save(update_fields=['now_energy', 'coin'])
        return Response({"coin": player.coin, "energy_now": player.now_energy}, status=status.HTTP_200_OK)


class Autobot(APIView):
    def post(self, request):
        player = get_object_or_404(Player, tg_id=request.data['tg_id'])
        upgrade = get_object_or_404(Upgrade, player=player)
        upgrade.flag_autobot = False
        upgrade.save(update_fields=['flag_autobot'])
        return Response({"timer": upgrade.autobot_time, "flag_autobot": upgrade.flag_autobot},
                        status=status.HTTP_200_OK)


class Take_Bonus_Autobot(APIView):
    def post(self, request):
        player = get_object_or_404(Player, tg_id=request.data['tg_id'])
        if player.upgrade.coin_bonus_result != 0 and player.upgrade.flag_autobot == True:
            player.coin += player.upgrade.coin_bonus_result
            player.upgrade.coin_bonus_result = 0
            player.upgrade.autobot_time = player.upgrade.start_autobot_time
            player.save()
            player.upgrade.save()
            return Response({"Success": "Деньги добавлены"}, status=status.HTTP_200_OK)
        else:
            return Response({"Error": "Нечего забирать"}, status=status.HTTP_425_TOO_EARLY)


class Info_Upgrade(APIView):
    def get(self, request, tg_id: int):
        player = get_object_or_404(Player, tg_id=tg_id)
        data = {"energy": player.energy,
                "energy_lvl": player.upgrade.energy_lvl,
                "price_lvl_up_energy": player.upgrade.price_lvl_up_energy,
                "damage": player.upgrade.damage,
                "price_lvl_up_damage_and_energy": player.upgrade.price_lvl_up_damage_and_energy,
                "lvl_one_tap_damage_and_energy": player.upgrade.lvl_one_tap_damage_and_energy}
        return Response(data, status=status.HTTP_200_OK)


class UpgradeEnergy(APIView):
    def post(self, request):
        player = get_object_or_404(Player, tg_id=self.request.data['tg_id'])
        if player.coin >= player.upgrade.price_lvl_up_energy:
            player.coin -= player.upgrade.price_lvl_up_energy
            player.energy += 500
            player.upgrade.energy_lvl += 1
            player.upgrade.price_lvl_up_energy *= 2
            player.save()
            player.upgrade.save()
            return Response({"coin": player.coin,
                             "energy_lvl": player.upgrade.energy_lvl,
                             "price_lvl_up_energy": player.upgrade.price_lvl_up_energy, }, status=status.HTTP_200_OK)

        else:
            return Response({"Error": "Недостаточно денег!"}, status=status.HTTP_400_BAD_REQUEST)


class UpgradeDamage(APIView):
    def post(self, request):
        player = get_object_or_404(Player, tg_id=self.request.data['tg_id'])
        if player.coin >= player.upgrade.price_lvl_up_damage_and_energy:
            player.coin -= player.upgrade.price_lvl_up_damage_and_energy
            player.upgrade.damage += 1
            player.upgrade.one_tap_energy += 1
            player.upgrade.lvl_one_tap_damage_and_energy += 1
            player.upgrade.price_lvl_up_damage_and_energy *= 2
            player.save()
            player.upgrade.save()
            return Response({"coin": player.coin,
                             "damage": player.upgrade.damage,
                             "one_tap_energy": player.upgrade.one_tap_energy,
                             "lvl_one_tap_damage_and_energy": player.upgrade.lvl_one_tap_damage_and_energy,
                             "price_lvl_up_damage_and_energy": player.upgrade.price_lvl_up_damage_and_energy},
                            status=status.HTTP_200_OK)

        else:
            return Response({"Error": "Недостаточно денег!"}, status=status.HTTP_400_BAD_REQUEST)


class Get_All_Box(APIView):
    def get(self, request, tg_id: int):
        boxes = Box.objects.all()
        player = get_object_or_404(Player, tg_id=tg_id)
        response_data = []
        for box in boxes:
            if box.name == 'Bronze':
                price = player.price_bronze_case
            elif box.name == 'Silver':
                price = player.price_silver_case
            elif box.name == 'Gold':
                price = player.price_gold_case
            box_data = {
                'name': box.name,
                'price': price,
                'prizes': []
            }
            for prize in box.prizes.all():
                prize_data = {
                    'prize_name': prize.name,
                    'prize_count': prize.count,
                    'prize_chance': prize.chance
                }
                box_data['prizes'].append(prize_data)
            response_data.append(box_data)
            sort_order = {'Bronze': 0, 'Silver': 1, 'Gold': 2}
            response_data = sorted(response_data, key=lambda x: sort_order[x['name']])
        return Response(response_data)


class Open_Box(APIView):
    def post(self, request):
        player = get_object_or_404(Player, tg_id=request.data['tg_id'])
        # Проверка на доступность сундуков для игрока
        if not player.boxes_available:
            raise PermissionDenied('Сундуки недоступны для открытия')
        name = request.data['name_box']
        free_open = request.data.get('free_open', False)  # значение по умолчанию, если не пришло в теле
        box = get_object_or_404(Box, name=name)
        result = []
        prize_count = {'Bronze': 1, 'Silver': 2, 'Gold': 3}.get(name, 0)
        if box.name == 'Bronze':
            if not free_open and player.coin < player.price_bronze_case:
                return Response({'Error': 'Недостаточно средств'}, status=status.HTTP_400_BAD_REQUEST)
            if not free_open:
                player.coin -= player.price_bronze_case
                player.price_bronze_case *= 1.35
            prizes = box.prizes.all()

        elif box.name == 'Silver':
            if not free_open and player.coin < player.price_silver_case:
                return Response({'Error': 'Недостаточно средств'}, status=status.HTTP_400_BAD_REQUEST)
            if not free_open:
                player.coin -= player.price_silver_case
                player.price_silver_case *= 1.35
            prizes = box.prizes.all()

        elif box.name == 'Gold':
            if not free_open and player.coin < player.price_gold_case:
                return Response({'Error': 'Недостаточно средств'}, status=status.HTTP_400_BAD_REQUEST)
            if not free_open:
                player.coin -= player.price_gold_case
                player.price_gold_case *= 1.55
            prizes = box.prizes.all()
        else:
            return Response({'Error': 'Неправильные переданы даныне'}, status=status.HTTP_400_BAD_REQUEST)

        for _ in range(prize_count):
            rand = random.uniform(0, 100)
            summ_chance = 0
            for prize in prizes:
                summ_chance += prize.chance
                if rand <= summ_chance:
                    if prize.name == 'Skin' and 'Skin' in [p['prize_name'] for p in result]:
                        continue  # Пропускаем добавление второго приза с именем "Skin"
                    result.append({
                        'prize_id': prize.id,
                        'prize_name': prize.name,
                        'prize_count': prize.count,
                        'prize_chance': prize.chance
                    })
                    break
        player.save()
        return Response(result)


class Take_And_Apply_Bonus(APIView):
    def post(self, request):
        player = get_object_or_404(Player, tg_id=request.data['tg_id'])
        prizes = request.data.get('prizes', [])

        for prize in prizes:
            prize_name = prize.get('prize_name')
            prize_count = prize.get('prize_count', 1)  # Значение по умолчанию 1

            if prize_name == "Coin Boosts":
                player.upgrade.damage += 1
                player.upgrade.one_tap_energy += 1
                player.upgrade.lvl_one_tap_damage_and_energy += 1
                player.upgrade.price_lvl_up_damage_and_energy *= 2
            elif prize_name == "Energy Boosts":
                if player.now_energy == player.energy:
                    player.now_energy += 500
                player.energy += 500
                player.upgrade.energy_lvl += 1
                player.upgrade.price_lvl_up_energy *= 2
            elif prize_name == "Bot Boosts":
                if player.upgrade.autobot_time == player.upgrade.start_autobot_time:
                    player.upgrade.autobot_time += 300
                player.upgrade.start_autobot_time += 300
                player.upgrade.autobot_lvl += 1
            elif prize_name == "Dimonds":
                player.crystal += prize_count
            elif prize_name == "Skin":
                if not Skin.objects.filter(player=player, id_prize=prize.get('prize_id')).exists():
                    prize_instance = Prize.objects.get(id=prize.get('prize_id'))
                    Skin.objects.create(player=player, prize=prize_instance, id_prize=prize.get('prize_id'))

        player.save()
        player.upgrade.save()
        return Response({'Success': 'Бонусы получены '})


class CompleteReferralSystem(APIView):
    def get(self, request, new_id: int, referral_id: int):
        if new_id == referral_id:
            return Response({"Error": "Нельзя добавить самого себя в друзья!"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            new_player = get_object_or_404(Player, tg_id=new_id)
            referral = get_object_or_404(Player, tg_id=referral_id)

            info1_exists = ReferralSystem.objects.filter(referral=referral, new_player=new_player).exists()
            info2_exists = ReferralSystem.objects.filter(referral=new_player, new_player=referral).exists()

            if info1_exists or info2_exists:
                return Response({"Error": "Данной игрок уже находится у вас в друзьях"},
                                status=status.HTTP_400_BAD_REQUEST)
            else:
                ReferralSystem.objects.create(referral=referral, new_player=new_player)
                return Response({'success': 'Перейдите во кладку друзья и заберите бонус'}, status=status.HTTP_200_OK)


class AllFriends(APIView):
    def get(self, request, tg_id: int):
        person = get_object_or_404(Player, tg_id=tg_id)
        data = []

        # Получаем информацию о друзьях, которых пригласил этот человек
        referral_info = ReferralSystem.objects.filter(referral=person).select_related('new_player')
        for i in referral_info:
            data.append({
                'name': i.new_player.name,
                'lvl': i.new_player.lvl,
                'player_id': i.new_player.id,
                'referral_system_id': i.id,
                'flag': i.referral_bonus
            })

        # Получаем информацию о том, кто пригласил этого человека
        invited_info = ReferralSystem.objects.filter(new_player=person).select_related('referral')
        for i in invited_info:
            data.append({
                'name': i.referral.name,
                'lvl': i.referral.lvl,
                'player_id': i.referral.id,
                'referral_system_id': i.id,
                'flag': i.referral_bonus
            })

        if not data:
            return Response({"Error": "У Вас ещё нет друзей"}, status=status.HTTP_404_NOT_FOUND)

        return Response(data, status=status.HTTP_200_OK)


class TakinReferralBonus(APIView):
    def post(self, request):
        person = get_object_or_404(Player, tg_id=request.data['tg_id'])
        system = get_object_or_404(ReferralSystem, id=request.data['referral_system_id'])
        if system.referral.lvl < 2 and system.new_player.lvl < 2:
            return Response({
                'Error': 'Оба игрока должны достичь уровня выше 2 для получения бонуса.',
                'referral_lvl': system.referral.lvl,
                'new_player_lvl': system.new_player.lvl
            }, status=status.HTTP_400_BAD_REQUEST)
        if system.referral == person and system.referral_bonus == True:
            system.referral_bonus = False
            system.save()
            person.crystal += 1000
            person.save()
            return Response({
                'referral': 'Получил 1000 кристаллов'})
        if system.new_player == person and system.new_player_bonus == True:
            system.new_player_bonus = False
            system.save()
            system.new_player.crystal += 500
            system.new_player.save()
            return Response({
                'new_player': 'Получил 500 кристаллов'})
        else:
            return Response({'Error': "Вы уже получали бонус"}, status=status.HTTP_400_BAD_REQUEST)


class GenerateRefLinkView(APIView):
    def get(self, request, tg_id: int):
        try:
            create_link = f"https://t.me/FortuneMonster_bot?start=id_{tg_id}"
        except Exception as e:
            logging.error(f"Error generating referral link: {e}")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'ref_link': create_link}, status=status.HTTP_200_OK)


class LeagueDetailView(ListAPIView):
    """Детальная информация о лиге с отсортированными пользователями"""
    serializer_class = LeaguesSerializer

    def get_queryset(self):
        # Получаем название лиги из параметров запроса
        tg_id = self.kwargs.get('tg_id', None)
        league_name = self.kwargs.get('name', None)

        if tg_id:
            player = Player.objects.get(tg_id=tg_id)
            return League.objects.filter(id=player.league_id).prefetch_related('players')
        elif league_name:
            return League.objects.filter(name=league_name).prefetch_related('players')
        else:
            return League.objects.all()


class SkinsList(ListAPIView):
    """Список всех скинов у Лиг"""
    serializer_class = PlayerSkinSerializer

    def get_queryset(self):
        tg_id = self.kwargs.get('tg_id')
        if not tg_id:
            raise NotFound("Требуется параметр tg_id")

        player = Player.objects.filter(tg_id=tg_id).first()
        if not player:
            raise NotFound("Игрок не найден")

        return PlayerSkin.objects.filter(player=player).order_by('-is_active', '-available_skin', 'skin__id')


class ActivateSkinView(APIView):
    """API для активации выбранного скина"""

    def post(self, request, *args, **kwargs):
        tg_id = request.data.get('tg_id')
        skin_id = request.data.get('skin_id')

        if not tg_id or not skin_id:
            return Response({'error': 'Параметры tg_id и skin_id обязательны'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            player = Player.objects.filter(tg_id=tg_id).first()
            if not player:
                raise NotFound("Игрок не найден")

            # Деактивация всех скинов игрока
            PlayerSkin.objects.filter(player=player).update(is_active=False)

            # Активация выбранного скина
            player_skin = PlayerSkin.objects.filter(player=player, skin_id=skin_id).first()

            if player_skin and player_skin.available_skin:
                player_skin.is_active = True
                player_skin.save()
                return Response({'message': 'Скин активирован'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Скин не найден или он вам не доступен'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class TaskPlayerDetailView(APIView):
    """Информация о задачах и их статусе у игрока"""

    def get(self, request, tg_id, description=None):
        """Получаем информацию о всех задачах или об одной"""
        player = get_object_or_404(Player, tg_id=tg_id)
        if description:
            tasks = PlayerTask.objects.filter(player=player, task__description=description)
        else:
            tasks = PlayerTask.objects.filter(player=player).order_by('completed', 'id')

        # Проверяем, что tasks является queryset'ом
        if not tasks.exists():
            return Response({"detail": "Задачи не найдены"}, status=status.HTTP_404_NOT_FOUND)

        serializer = PlayerTaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, tg_id, description):
        """Проверяем прошло ли 30 минут что бы задача считалась выполненная"""
        if tg_id and description:
            player = get_object_or_404(Player, tg_id=tg_id)
            tasks = PlayerTask.objects.filter(player=player, task__description=description)
            task = tasks.first()
            serializer = PlayerTaskSerializer(task, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                task.check_completion()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error': 'tg_id и description обязательные поля'}, status=status.HTTP_400_BAD_REQUEST)


class StartTaskView(APIView):
    """Запуск таймера задачи после перехода на ссылку"""
    def post(self, request, tg_id, description):
        """Запуск таймера после перехода на ссылку"""
        player = get_object_or_404(Player, tg_id=tg_id)
        tasks = PlayerTask.objects.filter(player=player, task__description=description)
        task = tasks.first()
        if task.completed:
            return Response({"error": "Задача уже завершена."}, status=status.HTTP_400_BAD_REQUEST)
        serializer = PlayerTaskSerializer(task, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            task.start_task_player()  # Запуск таймера выполнения задачи
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def is_user_in_chat(user_tg_id, chat_id, TOKEN):
    """Функция для проверки, состоит ли пользователь в чате"""

    url = f"https://api.telegram.org/bot{TOKEN}/getChatMember"
    params = {
        "chat_id": chat_id,
        "user_id": user_tg_id
    }
    response = requests.get(url, params=params)
    data = response.json()

    if data['ok']:
        status = data['result']['status']
        if status in ['member', 'administrator', 'creator']:
            return True
    return False


class TaskTelegram(APIView):
    def post(self, request, tg_id, description):
        """Запуск выполнения задачи после перехода по ссылке"""
        player = get_object_or_404(Player, tg_id=tg_id)
        tasks = PlayerTask.objects.filter(player=player, task__description=description)
        task = tasks.first()
        if task.completed:
            return Response({"error": "Задача уже завершена."}, status=status.HTTP_400_BAD_REQUEST)
        task.start_time = timezone.now()
        task.save()
        serializer = PlayerTaskSerializer(task, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CheckSubscriptionView(APIView):
    def post(self, request):
        player_tg_id = request.data.get('player_tg_id')
        if not player_tg_id:
            return Response({"error": "Telegram ID пользователя не указан."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            player = Player.objects.get(tg_id=player_tg_id)
        except Player.DoesNotExist:
            return Response({"error": "Игрок с таким Telegram ID не найден."}, status=status.HTTP_404_NOT_FOUND)

        try:
            task_tg_channel = player.players_task.get(id=4)
            task_tg_group = player.players_task.get(id=3)
        except TaskPlayer.DoesNotExist:
            return Response({"error": "Задачи с указанными ID не найдены."}, status=status.HTTP_404_NOT_FOUND)

        # Проверяем подписку на канал и группу
        is_in_channel = is_user_in_chat(player_tg_id, CHANNEL_ID, TOKEN)
        is_in_group = is_user_in_chat(player_tg_id, GROUP_ID, TOKEN)

        if is_in_channel and is_in_group:
            # Обновляем поле completed на True для обоих задач
            task_tg_channel.completed = True
            task_tg_channel.start_time = None
            task_tg_group.completed = True
            task_tg_group.start_time = None
            task_tg_channel.save()
            task_tg_group.save()
            message = f"Пользователь подписан на канал и группу. task_tg_channel_start_time: {task_tg_channel.start_time}, task_tg_group_start_time: {task_tg_group.start_time}"
            return Response({"message": message}, status=status.HTTP_200_OK)
        elif is_in_channel:
            # Обновляем поле completed на True для задачи канала
            task_tg_channel.completed = True
            task_tg_channel.start_time = None
            task_tg_channel.save()
            message = f"Пользователь подписан только на канал. task_tg_channel_start_time: {task_tg_channel.start_time}, task_tg_group_start_time: {task_tg_group.start_time}"
            return Response({"message": message}, status=status.HTTP_200_OK)
        elif is_in_group:
            # Обновляем поле completed на True для задачи группы
            task_tg_group.completed = True
            task_tg_group.start_time = None
            task_tg_group.save()
            message = f"Пользователь подписан только на группу. task_tg_channel_start_time: {task_tg_channel.start_time}, task_tg_group_start_time: {task_tg_group.start_time}"
            return Response({"message": message}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Пользователь не подписан ни на канал, ни на группу."},
                            status=status.HTTP_200_OK)


class InstructionUserView(APIView):
    """Отменяем показ инструкции"""
    def post(self, request, tg_id):
        player = get_object_or_404(Player, tg_id=tg_id)
        player.show_instruction = False
        player.save()
        return Response({"message": "Пользователь ознакомился с инструкцией."},status=status.HTTP_200_OK)
