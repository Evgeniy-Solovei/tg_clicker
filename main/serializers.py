from django.contrib.auth import get_user_model
from rest_framework import serializers
from main.models import League, PlayerSkins, Player, TaskPlayer, LeagueSkins


class PlayerSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Player"""
    class Meta:
        model = Player
        fields = ('tg_id', 'name', 'coin')


class LeaguesSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Leagues"""
    players = serializers.SerializerMethodField()

    class Meta:
        model = League
        fields = ('name', 'min_coin', 'players')

    def get_players(self, obj):
        # Сортируем игроков по количеству монет перед сериализацией
        sorted_players = obj.players.all().order_by('-coin')
        return PlayerSerializer(sorted_players, many=True).data


class PlayerSkinsSerializer(serializers.ModelSerializer):
    """Сериализатор для модели PlayerSkins"""
    class Meta:
        model = PlayerSkins
        fields = ['id', 'player', 'prize', 'id_prize', 'description', 'name', 'available_skin', 'is_active']


class LeagueSkinsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeagueSkins
        fields = ['id', 'player', 'name', 'description', 'league', 'available_skin', 'is_active']


class TaskPlayerSerializer(serializers.ModelSerializer):
    """Сериализатор для модели TaskPlayer"""

    class Meta:
        model = TaskPlayer
        fields = ['name', 'description', 'completed', 'is_active', 'start_time']


