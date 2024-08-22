from django.contrib.auth import get_user_model
from rest_framework import serializers

from main.models import League


class LeaguesSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Leagues"""

    class Meta:
        model = League
        fields = ('name', 'min_coin', 'price', 'is_active')
