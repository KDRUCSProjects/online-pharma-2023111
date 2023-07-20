from ...models.data.brand import Brand
from ...serializers.data.brand import BrandSerializer
from .base import DataRootViewSet


class BrandViewSit(DataRootViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
