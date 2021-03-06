# Generated by Django 3.2.3 on 2021-05-16 08:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, verbose_name='Room')),
                ('grid_type', models.CharField(choices=[('square', 'square'), ('hex', 'hex'), ('free', 'free')], default='square', max_length=16, verbose_name='Grid Type')),
                ('locked', models.CharField(choices=[('open', 'open'), ('closed', 'closed'), ('members', 'members')], default='open', max_length=16, verbose_name='Lock')),
                ('description', models.CharField(blank=True, max_length=140, null=True, verbose_name='Description')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
