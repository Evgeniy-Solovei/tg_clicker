from django.contrib.auth import get_user_model
from rest_framework import serializers
from main.models import League, PlayerSkins, Player


class PlayerSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Player"""
    class Meta:
        model = Player
        fields = ('tg_id', 'name', 'coin', 'lvl',)


class LeaguesSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Leagues"""
    players = PlayerSerializer(many=True, read_only=True)

    class Meta:
        model = League
        fields = ('name', 'min_coin', 'price', 'is_active', 'players')


class PlayerSkinsSerializer(serializers.ModelSerializer):
    """Сериализатор для модели PlayerSkins"""
    class Meta:
        model = PlayerSkins
        fields = ['player', 'prize', 'id_prize']
