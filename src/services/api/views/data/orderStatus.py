from ...models.data.orderStatus import OrderStatus
from ...serializers.data.orderStatus import OrderStatusSerializer
from .base import DataRootViewSet

class OrderStatusViewSet(DataRootViewSet):
    queryset = OrderStatus.objects.all()
    serializer_class = OrderStatusSerializer