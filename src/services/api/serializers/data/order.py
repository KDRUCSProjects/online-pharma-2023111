from ...models.data.order import Order
from .base import DataRootSerializer
from .ad import AdSerializer
from .user import UserSerializer


class OrderSerializer(DataRootSerializer):
    ad = AdSerializer()
    user = UserSerializer()

    class Meta:
        model = Order

        fields = "__all__"
