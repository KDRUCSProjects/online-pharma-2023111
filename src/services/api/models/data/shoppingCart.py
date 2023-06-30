from .base import DataRoot
from django.db import models
from django.contrib.auth import get_user_model
from .ad import Ad


class ShoppingCart(DataRoot):
    ad_id = models.ForeignKey(Ad, on_delete=models.CASCADE, related_name="Ad")
    user_id = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="ad_user"
    )
    quantity = models.PositiveIntegerField()
