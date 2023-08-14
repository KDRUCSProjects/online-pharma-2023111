from ...models.data.order import Order
from ...models.data.order_item import OrderItem
from ...serializers.data.order import OrderSerializer
from rest_framework.decorators import api_view
from .base import DataRootViewSet
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


class OrderViewSit(DataRootViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    # @csrf_exempt
    # def save_order(request):
    #     if request.method == 'POST':
    #         # Get the data from the POST request sent by React
    #         data = request.POST

    #         # Extract the necessary fields from the data
    #         address = data.get('address')
    #         delivery_instruction = data.get('delivery_instruction')
    #         delivery_fee = data.get('delivery_fee')
    #         total_amount = data.get('total_amount')
    #         user = data.get('user')
    #         ads = data.getlist('cart[]')  # Assuming 'ads' is an array of ad objects sent from React

    #         # Create a new order instance and save it to the database
    #         order = Order.objects.create(
    #             address=address,
    #             delivery_instruction=delivery_instruction,
    #             delivery_fee=delivery_fee,
    #             total_amount=total_amount,
    #             user=user
    #         )

    #         # Save each ad as an order item associated with the newly created order
    #         for ad in ads:
    #             ad = ad['id']
    #             quantity = ad['amount']
    #             price = ad['price']

    #             OrderItem.objects.create(
    #                 order=order,
    #                 ad=ad,
    #                 quantity=quantity,
    #                 price=price
    #             )

    #         return JsonResponse({'message': 'Order saved successfully.'})

    #     return JsonResponse({'error': 'Invalid request method.'})
