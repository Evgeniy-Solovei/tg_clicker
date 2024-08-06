from django.db import models


class Player(models.Model):
    tg_id = models.PositiveBigIntegerField(unique=True)
    name = models.CharField(max_length=50)
    lvl = models.IntegerField(default=1)
    energy = models.IntegerField(default=1000)
    coin = models.PositiveBigIntegerField(default=0)
    crystal = models.PositiveBigIntegerField(default=0)

    def __str__(self):
        return f"name:{self.name}, tg_id:{self.tg_id}, lvl:{self.lvl}, coins:{self.coin}"


class Upgrade(models.Model):
    player = models.OneToOneField(Player, on_delete=models.CASCADE, related_name='upgrade')
    energy_lvl = models.IntegerField(default=1)
    price_lvl_up_energy = models.PositiveBigIntegerField(default=1000)
    autobot_time = models.PositiveBigIntegerField(default=300)
    autobot_lvl = models.IntegerField(default=1)
    flag_autobot = models.BooleanField(default=True)
    one_tap_energy = models.IntegerField(default=1)
    damage = models.IntegerField(default=1)
    price_lvl_up_damage_and_energy = models.PositiveBigIntegerField(default=1000)
    lvl_one_tap_damage_and_energy = models.IntegerField(default=1)

    def __str__(self):
        return f"energy_lvl:{self.energy_lvl} - price_lvl_up_energy :{self.price_lvl_up_energy}, autobot_time:{self.autobot_time}"


class Box(models.Model):
    name = models.CharField(max_length=30)
    prizes = models.ManyToManyField('Prize', related_name='box')

    def __str__(self):
        return f"name:{self.name}"


class Prize(models.Model):
    name = models.CharField(max_length=50)
    count = models.IntegerField(default=1)
    chance = models.IntegerField(default=1)

    def __str__(self):
        return f"name:{self.name}, count:{self.count}, chens:{self.chance}"


class ReferralSystem(models.Model):
    referral = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='referral')
    new_player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='new_person')
    referral_bonus = models.BooleanField(default=True)
    new_player_bonus = models.BooleanField(default=True)

    def __str__(self):
        return f"me:{self.referral.name}___new_player:{self.new_player.name}"

