from ...models.data.generics import Generics
from .base import DataRootSerializer


class GenericsSerializer(DataRootSerializer):
    class Meta:
        model = Generics
        fields = "__all__"
