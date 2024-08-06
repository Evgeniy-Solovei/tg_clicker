import random
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import *
from django.shortcuts import get_object_or_404
from django.http import JsonResponse


class Main_info(APIView):
    def get(self, request, tg_id: int, name: str):
        try:
            player = Player.objects.get(tg_id=tg_id)
        except Player.DoesNotExist:
            player = Player.objects.create(tg_id=tg_id, name=name)
            Upgrade.objects.create(player=player)

        info = {"lvl": player.lvl,
                "coin": player.coin,
                "energy": player.energy,
                "crystal": player.crystal,
                "flag_autobot": player.upgrade.flag_autobot,
                "timer_autobot": player.upgrade.autobot_time,
                "money_per_tap": player.upgrade.damage,
                "energy_per_tap": player.upgrade.one_tap_energy}

        return Response(info, status=status.HTTP_200_OK)


class Tap_Tap(APIView):
    def post(self, request):
        player = get_object_or_404(Player, tg_id=request.data['tg_id'])
        coin = int(self.request.data['coin'])
        energy = int(self.request.data['energy'])
        player.coin += coin
        player.energy = energy
        player.save(update_fields=['energy', 'coin'])
        return Response({"coin": player.coin, "energy": player.energy}, status=status.HTTP_200_OK)


class Autobot(APIView):
    def post(self, request):
        player = get_object_or_404(Player, tg_id=self.request.data['tg_id'])
        player.upgrade.flag_autobot = False
        player.save()
        player.upgrade.save(update_fields=['flag_autobot', ])
        return Response({"timer": player.upgrade.autobot_time, "flag_autobot": player.upgrade.flag_autobot},
                        status=status.HTTP_200_OK)


class Info_Upgrade(APIView):
    def get(self, request, tg_id: int):
        player = get_object_or_404(Player, tg_id=tg_id)
        data = {"energy_lvl": player.upgrade.energy_lvl,
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
        if player.coin >= player.upgrade.price_lvl_up_energy:
            player.coin -= player.upgrade.price_lvl_up_damage_and_energy
            player.upgrade.damage += 1
            player.upgrade.one_tap_energy += 1
            player.upgrade.lvl_one_tap_damage_and_energy += 1
            player.upgrade.price_lvl_up_damage_and_energy *= 2
            player.save()
            player.upgrade.save()
            return Response({"coin": player.coin,
                             "one_tap_energy": player.upgrade.one_tap_energy,
                             "lvl_one_tap_damage_and_energy": player.upgrade.lvl_one_tap_damage_and_energy,
                             "price_lvl_up_damage_and_energy": player.upgrade.price_lvl_up_damage_and_energy},
                            status=status.HTTP_200_OK)

        else:
            return Response({"Error": "Недостаточно денег!"}, status=status.HTTP_400_BAD_REQUEST)


class Get_All_Box(APIView):
    def get(self, request):
        boxes = Box.objects.all()
        response_data = []
        for box in boxes:
            box_data = {
                'name': box.name,
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
        return Response(response_data)


class Open_Box(APIView):
    def post(self, request):
        name = self.request.data['name_box']
        box = get_object_or_404(Box, name=name)
        prize_count = {'Bronze': 1, 'Silver': 2, 'Gold': 3}.get(name, 0)
        prizes = box.prizes.all()
        result = []
        for _ in range(prize_count):
            rand = random.uniform(0, 100)
            summ_chance = 0
            for prize in prizes:
                summ_chance += prize.chance
                if rand <= summ_chance:
                    result.append({
                        'prize_name': prize.name,
                        'prize_count': prize.count,
                        'prize_chance': prize.chance
                    })
                    break
        return Response({'box_name': name, 'prizes': result})

# class Take_And_Apply_Bonus(ApiView):
#     def post(self, request):
#
#         box = get_object_or_404(Box, id=self.request.data['box_id'])
#
#     for i in box.prizes.all():
#         if i.name ==
