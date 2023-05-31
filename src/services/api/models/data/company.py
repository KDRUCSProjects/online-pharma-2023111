from django.db import models
from .base import DataRoot

class Company (DataRoot):    
    name = models.CharField(max_length=50)
    def __str__(self) :
        return self.name 