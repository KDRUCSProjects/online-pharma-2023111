from ...models.data.drug import Drug
from ...serializers.data.drug import DrugSerializer
from .base import DataRootViewSet


class DrugViewSit(DataRootViewSet):
    queryset = Drug.objects.all()
    serializer_class = DrugSerializer
