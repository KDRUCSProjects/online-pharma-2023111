from django.db import models
from .base import DataRoot
from .category import Category
from .country import Country


class Ad(DataRoot):
    brand = models.CharField(max_length=100)
    ad_title = models.CharField(max_length=100)
    max_order = models.CharField(max_length=20)
    description = models.TextField(blank=True)
    price = models.IntegerField()
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="drug_category"
    )
    country = models.ForeignKey(
        Country, on_delete=models.CASCADE, related_name="drug_country"
    )


class AdImage(DataRoot):
    drug = models.ForeignKey(Ad, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(
        upload_to="frontend/static/images/drugs/drug/%Y/%m/%d/",
        blank=True,
        null=True,
        default="",
    )

    def __str__(self):
        return self.image.name
