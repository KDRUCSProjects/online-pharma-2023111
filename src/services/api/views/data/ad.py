from ...models.data.ad import Ad
from ...serializers.data.ad import AdSerializer
from .base import DataRootViewSet
from rest_framework.filters import SearchFilter


class AdViewSit(DataRootViewSet):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title']
