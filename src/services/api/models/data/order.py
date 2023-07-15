from django.db import models
from .base import DataRoot
from .ad import Ad
from django.contrib.auth import get_user_model


class StatusCondition(models.IntegerChoices):
    pending = 1
    canceled = 2
    completed = 3


class Order(DataRoot):
    address = models.CharField(max_length=200, null=False, blank=False)
    ad = models.ForeignKey(Ad, on_delete=models.CASCADE, related_name="Ad")
    status = models.PositiveIntegerField(
        choices=StatusCondition.choices,
        default=StatusCondition.pending,
    )
    quantity = models.PositiveIntegerField()
    delivery_instruction = models.TextField(max_length=200)
    delivery_fee = 100
    total_amount = models.PositiveBigIntegerField(editable=False)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return self.address

    def save(self, *args, **kwargs):
        price = self.ad.price
        self.total_amount = (price * self.quantity) + self.delivery_fee
        super().save(*args, **kwargs)
