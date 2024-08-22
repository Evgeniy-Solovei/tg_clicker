from django.core.management.base import BaseCommand
from main.models import League


class Command(BaseCommand):
    help = 'Создаём лиги'

    def handle(self, *args, **kwargs):
        League.objects.bulk_create([
            League(name='Деревянный', min_coin=1000),
            League(name='Бронзовый', min_coin=10000),
            League(name='Серебрянный', min_coin=100000),
        ])
        self.stdout.write(self.style.SUCCESS('Лиги успешно инициализированы'))

