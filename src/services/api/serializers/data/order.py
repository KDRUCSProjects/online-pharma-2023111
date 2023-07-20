from ...models.data.order import Order
from .base import DataRootSerializer


class OrderSerializer(DataRootSerializer):
    class Meta:
        model = Order

        fields = "__all__"
