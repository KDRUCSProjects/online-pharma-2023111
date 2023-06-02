from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views.data.country import CountryViewSit
from .views.data.address import AddressViewSit
from .views.data.company import CompanyViewSit
from .views.data.type_name import TypeNameViewSit
from .views.data.category import CategoryViewSit
from .views.data.drug import DrugViewSit
from .views.data.order import OrderViewSit


route = routers.DefaultRouter()
route.register(r"countries",CountryViewSit)
route.register(r"addresses",AddressViewSit)
route.register(r"companies",CompanyViewSit)
route.register(r"type_names",TypeNameViewSit)
route.register(r"categories",CategoryViewSit)
route.register(r"drugs",DrugViewSit)
route.register(r"orders",OrderViewSit)

urlpatterns = [
    path("", include(route.urls)),
]
