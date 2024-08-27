from django.contrib.auth import get_user_model
from rest_framework import serializers

from main.models import League, PlayerSkins


class LeaguesSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Leagues"""

    class Meta:
        model = League
        fields = ('name', 'min_coin', 'price', 'is_active')


class PlayerSkinsSerializer(serializers.ModelSerializer):
    """Сериализатор для модели PlayerSkins"""
    class Meta:
        model = PlayerSkins
        fields = ['player', 'prize', 'id_prize']
