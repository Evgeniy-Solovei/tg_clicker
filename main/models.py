from datetime import timedelta
from django.db import models
from django.utils import timezone


class Player(models.Model):
    """Модель игрока"""
    tg_id = models.PositiveBigIntegerField(unique=True, verbose_name="Telegram ID")
    name = models.CharField(max_length=50, verbose_name="Имя игрока")
    lvl = models.IntegerField(default=1, verbose_name="Уровень игрока")
    energy = models.IntegerField(default=1000, verbose_name="Максимальная энергия игрока")
    now_energy = models.IntegerField(default=1000, verbose_name="Текущая энергия игрока")
    coin = models.PositiveBigIntegerField(default=1000, verbose_name="Монеты игрока")
    crystal = models.PositiveBigIntegerField(default=0, verbose_name="Кристаллы игрока")
    price_bronze_case = models.PositiveBigIntegerField(default=10000, verbose_name="Цена бронзового сундука")
    price_silver_case = models.PositiveBigIntegerField(default=30000, verbose_name="Цена серебренного сундука")
    price_gold_case = models.PositiveBigIntegerField(default=100000, verbose_name="Цена золотого сундука")
    league = models.ForeignKey('League', null=True, blank=True,on_delete=models.CASCADE, related_name='players',
                               verbose_name="Лига игрока")
    boxes_available = models.BooleanField(default=False, verbose_name="Доступны ли сундуки")
    show_instruction = models.BooleanField(default=True, verbose_name="Показывать инструкцию")
    tasks = models.BooleanField(default=False, verbose_name="Выполнены ли задачи")
    friend_lvl_2 = models.BooleanField(default=False, verbose_name="Друг выше 2 лвл")

    def __str__(self):
        return f"name:{self.name}, tg_id:{self.tg_id}, lvl:{self.lvl}, coins:{self.coin}, id:{self.pk}"


class Upgrade(models.Model):
    """Модель улучшений игрока"""
    coin_bonus_result = models.IntegerField(default=0, verbose_name="Бонус монет")
    player = models.OneToOneField(Player, on_delete=models.CASCADE, related_name='upgrade', verbose_name="Игрок")
    energy_lvl = models.IntegerField(default=1, verbose_name="Уровень энергии игрока")
    price_lvl_up_energy = models.PositiveBigIntegerField(default=1000, verbose_name="Цена повышения уровня энергии")
    start_autobot_time = models.PositiveBigIntegerField(default=300, verbose_name="Начальное время автобота")
    autobot_time = models.PositiveBigIntegerField(default=300, verbose_name="Время автобота")
    autobot_lvl = models.IntegerField(default=1, verbose_name="Уровень автобота")
    flag_autobot = models.BooleanField(default=True, verbose_name="Флаг автобота")
    one_tap_energy = models.IntegerField(default=1, verbose_name="Энергия за одно нажатие")
    damage = models.IntegerField(default=1, verbose_name="Урон")
    price_lvl_up_damage_and_energy = models.PositiveBigIntegerField(default=1000,
                                                                    verbose_name="Цена повышения уровня урона и энергии")
    lvl_one_tap_damage_and_energy = models.IntegerField(default=1,
                                                        verbose_name="Уровень урона и энергии за одно нажатие")

    def __str__(self):
        return (f"energy_lvl:{self.energy_lvl} - price_lvl_up_energy :{self.price_lvl_up_energy}, "
                f"autobot_time:{self.autobot_time}")


class Box(models.Model):
    """Модель коробки с призами"""
    name = models.CharField(max_length=30, verbose_name="Название коробки")
    prizes = models.ManyToManyField('Prize', related_name='box', verbose_name="Призы")
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return f"name:{self.name}"


class Prize(models.Model):
    """Модель приза"""
    name = models.CharField(max_length=50, verbose_name="Название приза")
    count = models.IntegerField(default=1, verbose_name="Количество")
    chance = models.FloatField(default=1, verbose_name="Шанс выпадения")

    def __str__(self):
        return f"name:{self.name}, count:{self.count}, chens:{self.chance}"


class ReferralSystem(models.Model):
    """Модель реферальной системы"""
    referral = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='referral', verbose_name="Реферал")
    new_player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='new_person',
                                   verbose_name="Новый игрок")
    referral_bonus = models.BooleanField(default=True, verbose_name="Бонус реферала")
    new_player_bonus = models.BooleanField(default=True, verbose_name="Бонус нового игрока")

    def __str__(self):
        return f"me:{self.referral.name}___new_player:{self.new_player.name}, id:{self.id}"


class League(models.Model):
    """
    Модель лиг для игроков.
    """
    name = models.CharField(max_length=50, verbose_name="Название лиги")
    min_coin = models.PositiveBigIntegerField(default=0, verbose_name="Количество монет для входа в лигу")
    price = models.PositiveBigIntegerField(default=0, verbose_name="Цена лиги")
    is_active = models.BooleanField(default=True, verbose_name="Активен/неактивен")

    def __str__(self):
        return f"{self.name} (min coin: {self.min_coin})"


class Skin(models.Model):
    """Модель для скинов (призы и лиги)"""

    class SkinType(models.TextChoices):
        PLAYER = 'player', 'Сундук'
        LEAGUE = 'league', 'Лига'

    player = models.ManyToManyField(Player, blank=True, related_name='skins', verbose_name="Игрок")
    prizes = models.ManyToManyField(Prize, blank=True, related_name='skins', verbose_name="Призы")
    league = models.OneToOneField(League, on_delete=models.CASCADE, related_name='skin', verbose_name="Лига скина",
                                  null=True, blank=True)
    id_prize = models.IntegerField(null=True, blank=True, verbose_name="ID приза из БД")
    name = models.CharField(max_length=30, default='', verbose_name='Название скина')
    description = models.CharField(max_length=100, default='', verbose_name='Описание скина')
    available_skin = models.BooleanField(default=False, verbose_name='Доступен/недоступен пользователю')
    is_active = models.BooleanField(default=False, verbose_name='Нынешний скин')
    skin_type = models.CharField(max_length=10, choices=SkinType.choices, default=SkinType.PLAYER, verbose_name='Тип скина')

    def __str__(self):
        return self.name


class TaskPlayer(models.Model):
    player = models.ManyToManyField(Player, related_name='players_task', blank=True, verbose_name='Игрок')
    name = models.CharField(max_length=20, verbose_name='Название задачи', default='')
    description = models.CharField(max_length=100, default='', verbose_name='Описание задачи')
    link = models.URLField(blank=True, null=True, verbose_name='Ссылка на аккаунт для выполнения задания')
    completed = models.BooleanField(default=False, verbose_name='Выполнено/не выполнено')
    is_active = models.BooleanField(default=True, verbose_name="Активна/неактивна")
    start_time = models.DateTimeField(null=True, blank=True, verbose_name='Старт выполнения задачи')

    def check_completion(self):
        """Проверяем прошло ли 30 минут и зачитываем выполнение задачи"""
        if self.start_time and timezone.now() >= self.start_time + timedelta(minutes=1):
            if not self.completed:  # Избегаем лишнего сохранения, если задача уже завершена
                self.completed = True
                self.save()

    def start_task_player(self):
        """При вызове представления, задаём полю значение начало выполнение задачи"""
        self.start_time = timezone.now()
        self.save()

    # Поле для добавление друзей должно быть такое description = 'add_friends'

