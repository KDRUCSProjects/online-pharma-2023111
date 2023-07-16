from .base import DataRoot
from django.db import models


class Generics(DataRoot):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
