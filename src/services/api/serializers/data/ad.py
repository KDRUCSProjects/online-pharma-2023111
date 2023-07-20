from ...models.data.ad import Ad, AdImage
from .base import DataRootSerializer
from .category import CategorySerializer
from .country import CountrySerializer
from .brand import BrandSerializer
from .generics import GenericsSerializer


class AdImageSerializer(DataRootSerializer):
    class Meta:
        model = AdImage
        fields = "__all__"


class AdSerializer(DataRootSerializer):
    category = CategorySerializer()
    country = CountrySerializer()
    brand = BrandSerializer()
    generics = GenericsSerializer()
    images = AdImageSerializer(many=True)

    class Meta:
        model = Ad
        fields = "__all__"
