from ...models.data.type_name import TypeName
from .base import DataRootSerializer

class TypeNameSerializer (DataRootSerializer):
    class Meta:
        model = TypeName
        fields = "__all__"