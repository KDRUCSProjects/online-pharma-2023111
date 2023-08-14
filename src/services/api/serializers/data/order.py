from ...models.data.order import Order
from ...models.data.order_item import OrderItem
from .base import DataRootSerializer
from .user import UserSerializer
from .order_item import OrderItemSerializer
from rest_framework import serializers
from ...models.data.ad import Ad


class OrderSerializer(DataRootSerializer):
    user = UserSerializer(read_only=True)
    order_item = OrderItemSerializer(read_only=True, many=True)
    uploaded_items = serializers.ListField(write_only=True)

    class Meta:
        model = Order

        fields = "__all__"

    def create(self, validated_data):
        items_validated_data = validated_data.pop("uploaded_items")
        order = Order.objects.create(**validated_data)
        for item in items_validated_data:
            ad = Ad.objects.get(pk=item["ad"])
            OrderItem.objects.create(
                order=order,
                ad=ad,
                quantity=item["quantity"],
                price=item["price"],
            )
        return order
