from ...models.data.brand import Brand
from .base import DataRootSerializer


class BrandSerializer(DataRootSerializer):
    class Meta:
        model = Brand
        fields = "__all__"
