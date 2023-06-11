from django.contrib import admin
from .models.data.country import Country
from .models.data.company import Company
from .models.data.category import Category
from .models.data.type_name import TypeName
from .models.data.drug import Drug
from .models.data.order import Order
# Register your models here.

admin.site.register(Country)
admin.site.register(Company)
admin.site.register(Category)
admin.site.register(TypeName)
admin.site.register(Drug)
admin.site.register(Order)