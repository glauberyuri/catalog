from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Product, Cart, CartItem
from .serializers import ProductSerializer, DetailedProductSerializer, CartItemSerializer
from rest_framework.response import Response
from django.db.models import F, Sum, DecimalField, ExpressionWrapper

# Create your views here.

@api_view(["GET"])

def products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)  
    return Response(serializer.data)

@api_view(["GET"])
def product_detail(request, slug):
    product = Product.objects.get(slug=slug)
    serializer = DetailedProductSerializer(product)
    return Response(serializer.data)

@api_view(["POST"])
def add_item(request):
    try:           
        cart_code = request.data.get("cart_code")
        quantity = request.data.get("quantity")
        product_id = request.data.get("product_id")

        cart, created = Cart.objects.get_or_create(cart_code = cart_code)
        product = Product.objects.get(id=product_id)

        cartitem, created = CartItem.objects.get_or_create(cart=cart, product=product)
        cartitem.quantity = quantity
        cartitem.save()

        # Calcula o total do carrinho
        total = CartItem.objects.filter(cart=cart).annotate(
            item_total=ExpressionWrapper(F('quantity') * F('product__price'), output_field=DecimalField())
        ).aggregate(total=Sum('item_total'))['total'] or 0

        # Salva o total no carrinho
        cart.total = total
        cart.save()


        serializer = CartItemSerializer(cartitem)

        return Response({"data": serializer.data, "message": "Seu carrinho está criado"}, status=201)
    except Exception as e:
        return Response({"error": str(e)}, status=400)
    
@api_view(["GET"])
def product_in_cart(request):
    cart_code = request.query_params.get("cart_code")
    product_id = request.query_params.get("product_id")

    cart = Cart.objects.get(cart_code=cart_code)
    product = Product.objects.get(id=product_id)

    product_exists_in_cart = CartItem.objects.filter(cart=cart, product=product).exists()

    return Response({'product_in_cart' : product_exists_in_cart})