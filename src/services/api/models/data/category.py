from django.db import models
from .base import DataRoot

class Category(DataRoot):
    title = models.CharField(max_length=500)
    parent = models.ForeignKey("Category",null=True, on_delete=models.CASCADE)
    def __str__(self):
        return self.title
