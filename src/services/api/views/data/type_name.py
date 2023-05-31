from ...models.data.type_name import TypeName
from ...serializers.data.type_name import TypeNameSerializer
from .base import DataRootViewSet


class TypeNameViewSit(DataRootViewSet):
    queryset = TypeName.objects.all()
    serializer_class = TypeNameSerializer
