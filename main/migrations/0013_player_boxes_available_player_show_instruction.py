# Generated by Django 5.0.6 on 2024-09-04 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_taskplayer_start_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='boxes_available',
            field=models.BooleanField(default=False, verbose_name='Доступны ли сундуки'),
        ),
        migrations.AddField(
            model_name='player',
            name='show_instruction',
            field=models.BooleanField(default=True, verbose_name='Показывать инструкцию'),
        ),
    ]