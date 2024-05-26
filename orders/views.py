from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.db import transaction
from django.forms import ValidationError
from django.shortcuts import redirect, render

from carts.models import Cart

from orders.forms import CreateOrderForm
from orders.models import Order, OrderItem

@login_required
def create_order(request):
    if request.method == 'POST':
        form = CreateOrderForm(request.POST)
        if form.is_valid():
            try:
                with transaction.atomic():
                    user = request.user
                    cart_items = Cart.objects.filter(user=user)

                    if not cart_items.exists():
                        messages.error(request, 'Your cart is empty.')
                        return redirect('cart:cart_detail')

                    for cart_item in cart_items:
                        if cart_item.product.quantity < cart_item.quantity:
                            raise ValidationError(f'Limited product quantity {cart_item.product.name} available: {cart_item.product.quantity}')

                    order = Order.objects.create(
                        user=user,
                        phone_number=form.cleaned_data['phone_number'],
                        requires_delivery=form.cleaned_data['requires_delivery'],
                        delivery_address=form.cleaned_data['delivery_address'],
                        payment_on_get=form.cleaned_data['payment_on_get'],
                    )

                    for cart_item in cart_items:
                        OrderItem.objects.create(
                            order=order,
                            product=cart_item.product,
                            name=cart_item.product.name,
                            price=cart_item.product.sell_price(),
                            quantity=cart_item.quantity,
                        )
                        cart_item.product.quantity -= cart_item.quantity
                        cart_item.product.save()

                    cart_items.delete()
                    messages.success(request, 'Order created!')
                    return redirect('user:profile')

            except ValidationError as e:
                messages.error(request, str(e))
                return redirect('cart:cart_detail')

    else:
        form = CreateOrderForm(initial={'first_name': request.user.first_name, 'last_name': request.user.last_name})

    context = {
        'title': 'Home - Create Order',
        'form': form,
    }
    return render(request, 'orders/create_order.html', context)
