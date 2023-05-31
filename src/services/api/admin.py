from django.contrib import admin
from .models.data.country import Country
from .models.data.address import Address

# Register your models here.

admin.site.register(Country)
admin.site.register(Address)