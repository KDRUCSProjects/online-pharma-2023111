from django.db import models
from .base import DataRoot
from .category import Category
from .country import Country


class Ad(DataRoot):
    brand = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.IntegerField()
    quantity = models.PositiveIntegerField(default=1)
    how_work = models.TextField()
    used_for = models.TextField()
    when_not_used = models.TextField()
    dosage = models.TextField()
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="drug_category"
    )
    country = models.ForeignKey(
        Country, on_delete=models.CASCADE, related_name="drug_country"
    )

    def __str__(self):
        return self.ad_title


class AdImage(DataRoot):
    ad = models.ForeignKey(Ad, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(
        upload_to="frontend/static/images/drugs/drug/%Y/%m/%d/",
        blank=True,
        null=True,
        default="",
    )

    def __str__(self):
        return self.image.name
