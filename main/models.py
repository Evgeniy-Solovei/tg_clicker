from django.db import models


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


class PlayerSkins(models.Model):
    """Модель для извлечения всех скинов у пользователя"""
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player_prizes', verbose_name="Игрок")
    prize = models.ForeignKey(Prize, on_delete=models.CASCADE, related_name='player_prizes', verbose_name="Приз")
    id_prize = models.IntegerField(null=True, blank=True, verbose_name="ID приза из БД")
