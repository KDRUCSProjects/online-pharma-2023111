from .base import DataRoot
from django.db import models


class Brand(DataRoot):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
