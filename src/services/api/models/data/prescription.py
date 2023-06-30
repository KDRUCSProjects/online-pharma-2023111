from .base import DataRoot
from django.db import models
from django.contrib.auth import get_user_model


class Prescription(DataRoot):
    image = models.ImageField(
        upload_to="frontend/static/images/prescription/%Y/%m/%d/",
        blank=True,
        default="",
    )
    user_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
