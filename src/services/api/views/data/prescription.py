from ...models.data.prescription import Prescription
from ...serializers.data.prescription import PrescriptionSerializer
from .base import DataRootViewSet

class PrescriptionViewSet(DataRootViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer