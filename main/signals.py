from django.core.cache import cache
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from .models import *
from .tasks import energy_task, flag_autobot_task, update_league_task
import logging

logger = logging.getLogger(__name__)


@receiver(post_save, sender=Player)
def my_changed_enegry(sender, instance, created, **kwargs):
    update_fields = kwargs.get('update_fields')
    logger.debug(f'my_changed_enegry called with update_fields: {update_fields}')
    if update_fields and 'now_energy' in update_fields:
        task_id = f'energy_task_{instance.id}'
        logger.debug(f'Checking cache for task_id: {task_id}')
        if not cache.get(task_id):
            logger.debug(f'Setting cache for task_id: {task_id}')
            cache.set(task_id, 'in_progress', timeout=60000 * 5)
            logger.debug(f'Scheduling energy_task for instance.id: {instance.id}')
            energy_task.apply_async((instance.id,), countdown=1)


@receiver(post_save, sender=Upgrade)
def my_changed_flag_autobot(sender, instance, created, **kwargs):
    update_fields = kwargs.get('update_fields')
    if update_fields and 'flag_autobot' in update_fields:
        task_id = f'flag_autobot_task_{instance.id}'
        if not cache.get(task_id):
            logger.debug(f'Setting cache for task_id: {task_id}')
            cache.set(task_id, 'in_progress', timeout=60000 * 5)
            result = flag_autobot_task.apply_async((instance.id,), countdown=2)
        else:
            print('I HAVE CACHE!')
            cache.delete(task_id)
            instance.save(update_fields=['flag_autobot'])


@receiver(pre_save, sender=Player)
def set_default_league(sender, instance, **kwargs):
    """Задаём дефолтное значение лиги при создании нового игрока."""
    if not instance.league:
        # Находим деревянную лигу с минимальным количеством монет 1000
        default_league = League.objects.filter(min_coin=1000).first()
        if default_league:
            instance.league = default_league
            # Проверяем наличие скина, связанного с этой лигой
            league_skin = Skin.objects.filter(league=default_league).first()
            if league_skin:
                league_skin.available_skin = True
                league_skin.is_active = True
                instance.skins.add(league_skin)

            logger.debug(f'League set to default league: {default_league} for player {instance.id}')
        else:
            logger.debug(f'No default league found with min_coin=1000')


@receiver(post_save, sender=Player)
def update_league(sender, instance, **kwargs):
    """Сигнал об изменении монет"""
    update_fields = kwargs.get('update_fields')
    if update_fields and 'coin' in update_fields:
        # Изменяем флаг на False после сохранения, что бы юзер больше не видел инструкцию
        instance.show_instruction = False
        instance.save()
        update_league_task(instance.id,)


@receiver(post_save, sender=Player)
def assign_existing_tasks_to_player(sender, instance, created, **kwargs):
    """Присваиваем все существующие задачи и скины игроку при создании нового игрока."""
    if created:
        tasks = TaskPlayer.objects.all()
        instance.players_task.set(tasks)
        skins = Skin.objects.all()
        instance.skins.set(skins)


@receiver(post_save, sender=TaskPlayer)
def assign_task_to_all_players(sender, instance, created, **kwargs):
    """Присваиваем новую задачу, всем существующим игрокам"""
    if created:
        players = Player.objects.all()  # Получаем всех игроков
        instance.player.set(players)  # Присваиваем всех игроков задаче
        instance.save()


@receiver(post_save, sender=TaskPlayer)
def check_task_completion(sender, instance, **kwargs):
    """Проверяем выполнено ли определённое количество задач и даём доступ к сундукам"""
    instance.check_completion()
    if instance.completed:
        player = instance.player.first()  # Получаем первого игрока из связанных
        if player:
            completed_tasks_count = TaskPlayer.objects.filter(player=player, completed=True).count()
            if completed_tasks_count >= 4:
                player.tasks = True
                player.save()
            # Проверка, достиг ли кто-то из приглашённых игроков уровня 2
            referrals = ReferralSystem.objects.filter(referral=player)
            for referral in referrals:
                if referral.new_player.lvl >= 2:
                    player.friend_lvl_2 = True
                    player.boxes_available = True
                    player.save()
                    break
