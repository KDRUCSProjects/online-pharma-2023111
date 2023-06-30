from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views.data.country import CountryViewSit
from .views.data.category import CategoryViewSit
from .views.data.ad import AdViewSit
from .views.data.order import OrderViewSit


route = routers.DefaultRouter()
route.register(r"countries", CountryViewSit)
route.register(r"categories", CategoryViewSit)
route.register(r"ads", AdViewSit)
route.register(r"orders", OrderViewSit)

urlpatterns = [
    path("", include(route.urls)),
    path("admin/", admin.site.urls),
]
