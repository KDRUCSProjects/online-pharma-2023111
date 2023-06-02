from django.db import models
from .base import DataRoot

class TypeName (models.Model):
    type = models.CharField(max_length=100)