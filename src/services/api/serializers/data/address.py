from ...models.data.address import Address
from .base import DataRootSerializer

class AddressSerializer (DataRootSerializer):
    class Meta:
        model = Address
        fields = "__all__"