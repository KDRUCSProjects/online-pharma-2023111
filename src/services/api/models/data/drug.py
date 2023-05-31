from django.db import models
from .base import DataRoot
from .category import Category
from .country import Country
from .company import Company
from .type_name import TypeName



class Drug (DataRoot):
    name = models.CharField(max_length=100)
    price= models.IntegerField()
    quantity = models.IntegerField()
    description = models.TextField(blank=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="drug_category")
    country_id  = models.ForeignKey(Country, on_delete=models.CASCADE, related_name="drug_country")
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="drug_Company")
    Type_name_id = models.ForeignKey(TypeName,null=True, on_delete=models.CASCADE, related_name="type_name")


class DrugImage(DataRoot):
    drug = models.ForeignKey(Drug, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(
        upload_to="frontend/static/images/drugs/drug/%Y/%m/%d/",
        blank=True,
        null=True,
        default="",
    )

    def __str__(self):
        return self.image.name