from ...models.data.drug import Drug
from .base import DataRootSerializer

class DrugSerializer (DataRootSerializer):
    class Meta:
        model = Drug
        fields = "__all__"