from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views.data.country import CountryViewSit
from .views.data.category import CategoryViewSit
from .views.data.ad import AdViewSit
from .views.data.order import OrderViewSit
from .views.data.complaint import ComplaintViewSet
from .views.data.feedback import FeedbackViewSet
from .views.data.prescription import PrescriptionViewSet
from .views.data.topSelling import TopAdsView
from .views.data.brand import BrandViewSit
from .views.data.generics import GenericsViewSit
from .views.data.totalSellingDatePrice import total_selling_price

route = routers.DefaultRouter()
route.register(r"countries", CountryViewSit)
route.register(r"categories", CategoryViewSit)
route.register(r"ads", AdViewSit)
route.register(r"orders", OrderViewSit)
route.register(r"complaints", ComplaintViewSet)
route.register(r"feedbacks", FeedbackViewSet)
route.register(r"prescriptions", PrescriptionViewSet)
route.register(r"brands", BrandViewSit)
route.register(r"generics", GenericsViewSit)

urlpatterns = [
    path("", include(route.urls)),
    path("top-selling/", TopAdsView.as_view(), name="top-products"),
    path("total-selling-price/", total_selling_price, name="total_selling_price"),
]
