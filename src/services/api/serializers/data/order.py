from ...models.data.order import Order
from .base import DataRootSerializer
from .user import UserSerializer
from .order_item import OrderItemSerializer


class OrderSerializer(DataRootSerializer):
    user = UserSerializer()
    order_item = OrderItemSerializer(many=True)

    class Meta:
        model = Order

        fields = "__all__"
