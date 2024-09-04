from django.contrib import admin
from .models import *


@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    pass


@admin.register(Upgrade)
class UpgradeAdmin(admin.ModelAdmin):
    pass


@admin.register(Box)
class BoxAdmin(admin.ModelAdmin):
    pass


@admin.register(Prize)
class PrizeAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "count", "chance"]


@admin.register(ReferralSystem)
class ReferralSystemAdmin(admin.ModelAdmin):
    pass


@admin.register(League)
class LeagueAdmin(admin.ModelAdmin):
    pass


@admin.register(PlayerSkins)
class PlayerSkinsAdmin(admin.ModelAdmin):
    list_display = ["id", "player", "prize", "id_prize"]


@admin.register(TaskPlayer)
class TaskPlayerAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "description", "link", "completed", "is_active"]
