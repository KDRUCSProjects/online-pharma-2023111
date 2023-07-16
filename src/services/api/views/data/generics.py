from ...models.data.generics import Generics
from ...serializers.data.generics import GenericsSerializer
from .base import DataRootViewSet

class GenericsViewSit(DataRootViewSet):
    queryset = Generics.objects.all()
    serializer_class = GenericsSerializer
