from ...models.data.orderStatus import OrderStatus
from .base import DataRootSerializer


class OrderStatusSerializer(DataRootSerializer):
    class Meta:
        model = OrderStatus
        fields = "__all__"
