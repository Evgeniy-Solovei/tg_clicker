# Generated by Django 5.0.6 on 2024-08-15 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_player_boxes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='box',
            name='price',
        ),
        migrations.RemoveField(
            model_name='player',
            name='boxes',
        ),
        migrations.AddField(
            model_name='player',
            name='price_bronze_case',
            field=models.PositiveBigIntegerField(default=10000),
        ),
        migrations.AddField(
            model_name='player',
            name='price_gold_case',
            field=models.PositiveBigIntegerField(default=100000),
        ),
        migrations.AddField(
            model_name='player',
            name='price_silver_case',
            field=models.PositiveBigIntegerField(default=30000),
        ),
    ]