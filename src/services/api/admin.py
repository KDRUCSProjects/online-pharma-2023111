from django.contrib import admin
from .models.data.ad import Ad
from .models.data.ad import AdImage
from .models.data.category import Category
from .models.data.complaint import Complaint
from .models.data.country import Country
from .models.data.feedback import Feedback
from .models.data.order import Order
from .models.data.prescription import Prescription

# Register your models here.


class AdImageAdmin(admin.StackedInline):
    model = AdImage
    extra = 1


class AdAdmin(admin.ModelAdmin):
    inlines = [AdImageAdmin]

    class Meta:
        model = Ad


admin.site.register(Ad, AdAdmin)
admin.site.register(AdImage)
admin.site.register(Category)
admin.site.register(Complaint)
admin.site.register(Country)
admin.site.register(Feedback)
admin.site.register(Order)
admin.site.register(Prescription)
