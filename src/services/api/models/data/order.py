from django.db import models
from django.contrib.auth import get_user_model
from .base import DataRoot
from .drug import Drug

class Order(DataRoot):
    drug_id = models.ForeignKey(Drug, on_delete=models.CASCADE, related_name="Drug")
    user_id = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="ad_user"
    )
    
    