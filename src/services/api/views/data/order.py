from ...models.data.order import Order
from ...serializers.data.order import OrderSerializer
from .base import DataRootViewSet


class OrderViewSit(DataRootViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
