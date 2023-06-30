from django.db import models
from .base import DataRoot
from .shoppingCart import ShoppingCart
from .orderStatus import OrderStatus
from .ad import Ad
from .shoppingCart import ShoppingCart


class Order(DataRoot):
    address = models.CharField(max_length=200, null=False, blank=False)
    shopping_id = models.ForeignKey(
        ShoppingCart, on_delete=models.CASCADE, related_name="shopping_cart"
    )
    status_id = models.ForeignKey(
        OrderStatus, on_delete=models.CASCADE, related_name="order_status"
    )
    total_amount = models.PositiveBigIntegerField(editable=False)
    
    def __str__(self):
        return self.address
        

    def save(self, *args, **kwargs):
        shopping = self.shopping_id
        ad = shopping.ad_id
        quantity = shopping.quantity
        self.total_amount = ad.price * quantity
        super().save(*args, **kwargs)
