from .base import DataRoot
from django.db import models


class OrderStatus(DataRoot):
    status = models.CharField(max_length=100)
    
    def __str__(self):
        return self.status
        
