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

route = routers.DefaultRouter()
route.register(r"countries", CountryViewSit)
route.register(r"categories", CategoryViewSit)
route.register(r"ads", AdViewSit)
route.register(r"orders", OrderViewSit)
route.register(r"complaints", ComplaintViewSet)
route.register(r"feedbacks", FeedbackViewSet)
route.register(r"prescriptions", PrescriptionViewSet)

urlpatterns = [
    path("", include(route.urls)),
    path("admin/", admin.site.urls),
    path("top-products/", TopAdsView.as_view(), name="top-products"),
]
