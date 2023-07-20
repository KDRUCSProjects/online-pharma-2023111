from django.db.models import Sum
from django.http import JsonResponse
from ...models.data.order import Order
from datetime import datetime


def total_selling_price(request):
    date = request.GET.get("date")
    total_price = Order.objects.filter(order_date=date).aggregate(
        total=Sum("total_amount")
    )
    return JsonResponse({"total_price": total_price["total"]})
