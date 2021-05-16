from django.db import models
from django.contrib.auth.models import User


class Room(models.Model):
    name = models.CharField(verbose_name='Room', max_length=32, null=False, blank=False)
    grid_type = models.CharField(verbose_name='Grid Type', choices=(
        ('square', 'square'), ('hex', 'hex'), ('free', 'free')
    ), default='square', max_length=16)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE, null=False, blank=False)
    locked = models.CharField(verbose_name='Lock', choices=(
        ('open', 'open'), ('closed', 'closed'), ('members', 'members')
    ), default="open", max_length=16)
    description = models.CharField(verbose_name='Description', null=True, blank=True, max_length=140)

    def __str__(self):
        return self.name
