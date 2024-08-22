from django.core.cache import cache
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from .models import *
from .tasks import energy_task, flag_autobot_task
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


# @receiver(pre_save, sender=Player)
# def set_default_league(sender, instance, **kwargs):
#     """Задаём дефолтное значение лиги при создании нового игрока."""
#     if not instance.league:
#         # Находим деревянную лигу с минимальным количеством монет 1000
#         default_league = League.objects.filter(min_coin=1000).first()
#         if default_league:
#             instance.league = default_league
#
#
# @receiver(post_save, sender=Player)
# def update_league(sender, instance, **kwargs):
#     """Сигнал об изменении монет"""
#     update_fields = kwargs.get('update_fields')
#     print(update_fields)
#     if update_fields and 'coin' in update_fields:
#         print(f"Юзер айди: {instance.id}")
#         update_league_task.apply_async((instance.id,))
