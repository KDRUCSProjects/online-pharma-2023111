from ...models.data.prescription import Prescription
from .base import DataRootSerializer


class PrescriptionSerializer(DataRootSerializer):
    class Meta:
        model = Prescription
        fields = "__all__"
