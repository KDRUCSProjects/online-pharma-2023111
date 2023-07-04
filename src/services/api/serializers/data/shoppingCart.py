from ...models.data.shoppingCart import ShoppingCart
from .base import DataRootSerializer


class ShoppingCartSerializer(DataRootSerializer):
    class Meta:
        model = ShoppingCart
        fields = "__all__"
