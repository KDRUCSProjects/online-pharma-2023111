from .base import DataRoot
from django.db import models
from django.contrib.auth import get_user_model


class Feedback(DataRoot):
    phone_number = models.CharField(max_length=100, null=False, blank=False)
    message = models.CharField(max_length=500)
    user_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
