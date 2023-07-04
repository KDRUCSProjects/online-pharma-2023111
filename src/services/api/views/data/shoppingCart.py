from ...models.data.shoppingCart import ShoppingCart
from ...serializers.data.shoppingCart import ShoppingCartSerializer
from .base import DataRootViewSet

class ShoppingCartViewSet(DataRootViewSet):
    queryset = ShoppingCart.objects.all()
    serializer_class = ShoppingCartSerializer