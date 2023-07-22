from ...models.data.prescription import Prescription
from .base import DataRootSerializer
from .user import UserSerializer


class PrescriptionSerializer(DataRootSerializer):
    user_id = UserSerializer()

    class Meta:
        model = Prescription
        fields = "__all__"
