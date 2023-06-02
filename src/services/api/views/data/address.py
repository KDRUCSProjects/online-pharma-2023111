from ...models.data.address import Address
from ...serializers.data.address import AddressSerializer
from .base import DataRootViewSet

class AddressViewSit(DataRootViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
