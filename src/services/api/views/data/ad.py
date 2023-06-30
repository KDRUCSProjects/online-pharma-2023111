from ...models.data.ad import Ad
from ...serializers.data.ad import AdSerializer
from .base import DataRootViewSet


class AdViewSit(DataRootViewSet):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
