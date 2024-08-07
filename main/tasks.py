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
        instance.autobot_time -= 1
        instance.coin_bonus_result += instance.damage
        instance.save(update_fields=['coin_bonus_result','autobot_time'])
        flag_autobot_task.apply_async((instance.id,), countdown=1)
    else:
        instance.flag_autobot = True
        instance.save(update_fields=['flag_autobot'])
        cache.delete(task_id)
