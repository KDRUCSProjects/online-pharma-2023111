from ...models.data.company import Company
from ...serializers.data.company import CompanySerializer
from .base import DataRootViewSet

class CompanyViewSit(DataRootViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
