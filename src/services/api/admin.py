from django.contrib import admin
from .models.data.ad import Ad
from .models.data.ad import AdImage
from .models.data.category import Category
from .models.data.complaint import Complaint
from .models.data.country import Country
from .models.data.feedback import Feedback
from .models.data.order import Order
from .models.data.order_item import OrderItem
from .models.data.prescription import Prescription

# Register your models here.


class AdImageAdmin(admin.StackedInline):
    model = AdImage
    extra = 1


class AdAdmin(admin.ModelAdmin):
    inlines = [AdImageAdmin]
    list_display = ("title", "brand", "sell_price")
    search_fields = ("title", "brand")

    class Meta:
        model = Ad


class OrderAdmin(admin.ModelAdmin):
    list_display = ("user", "address", "total_amount", "order_date", "order_time")
    search_fields = ("user", "address")


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ("order", "ad", "price", "quantity")
    search_fields = ("order", "ad")


admin.site.register(Category)
admin.site.register(Country)
admin.site.register(Ad, AdAdmin)
admin.site.register(AdImage)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Prescription)
admin.site.register(Complaint)
admin.site.register(Feedback)
