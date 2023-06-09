from ...models.data.company import Company
from .base import DataRootSerializer

class CompanySerializer (DataRootSerializer):
    class Meta:
        model = Company
        fields = "__all__" 