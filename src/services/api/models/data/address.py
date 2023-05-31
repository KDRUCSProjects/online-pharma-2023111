from django.db import models
from .base import DataRoot

class Address (DataRoot):
        district = models.CharField(max_length=50)
        area = models.CharField(max_length=50)
        street = models.CharField(max_length=50)
        home_number = models.IntegerField(null=True)