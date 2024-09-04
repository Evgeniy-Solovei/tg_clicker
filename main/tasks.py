from django.core.cache import cache
from celery import shared_task
from .models import *


@shared_task
def energy_task(instance_id):
    task_id = f'energy_task_{instance_id}'
    instance = Player.objects.get(id=instance_id)
    if instance.now_energy < instance.energy:
        instance.now_energy += 1
        if instance.now_energy >= instance.energy:
            instance.now_energy = instance.energy
            instance.save(update_fields=['now_energy', ])
            cache.delete(task_id)
        instance.save(update_fields=['now_energy', ])
        energy_task.apply_async((instance.id,), countdown=1)
    else:
        cache.delete(task_id)


@shared_task
def flag_autobot_task(instance_id):
    instance = Upgrade.objects.get(id=instance_id)
    task_id = f'energy_task_{instance_id}'
    if instance.autobot_time > 0:
        instance.autobot_time -= 2
        instance.coin_bonus_result = instance.coin_bonus_result + (instance.damage * 2)
        if instance.autobot_time == 0:
            instance.flag_autobot = True
            instance.save()
            cache.delete(task_id)
        instance.save()
        flag_autobot_task.apply_async((instance.id,), countdown=2)
    else:
        cache.delete(task_id)


@shared_task
def update_league_task(instance_id):
    """Задача для автоматического изменения лиги пользователей"""
    instance = Player.objects.get(id=instance_id)
    leagues = League.objects.order_by('min_coin')
    # Находим индекс текущей лиги пользователя
    current_league_index = None
    for index, league in enumerate(leagues):
        if instance.league == league:
            current_league_index = index
            break

    # Если текущая лига не найдена, начинаем с самой низшей лиги
    if current_league_index is None:
        current_league_index = 0

    # Проверяем лиги, начиная с текущей и выше
    for league in leagues[current_league_index:]:
        if instance.coin >= league.min_coin:
            if instance.league != league:
                instance.league = league
                instance.lvl += 1
        else:
            break
    instance.save()
