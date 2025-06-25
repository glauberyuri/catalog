from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Product, Cart, CartItem
from .serializers import ProductSerializer, DetailedProductSerializer, CartItemSerializer, SimpleCartSerializer
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
        quantity = int(request.data.get("quantity"))
        product_id = request.data.get("product_id")

        # Validação mínima
        if not cart_code or not quantity or not product_id:
            return Response({"error": "Dados incompletos."}, status=400)

        # Busca ou cria o carrinho e produto
        cart, _ = Cart.objects.get_or_create(cart_code=cart_code)
        product = Product.objects.get(id=product_id)

        # Adiciona ou atualiza o item no carrinho
        cartitem, created = CartItem.objects.get_or_create(cart=cart, product=product)

        if created:
            cartitem.quantity = quantity
        else:
            cartitem.quantity = F('quantity') + quantity
            cartitem.save(update_fields=['quantity'])  # Atualiza no banco
            cartitem.refresh_from_db()

        cartitem.save()

        # Recalcula o total do carrinho
        total = CartItem.objects.filter(cart=cart).annotate(
            item_total=ExpressionWrapper(
                F('quantity') * F('product__price'),
                output_field=DecimalField()
            )
        ).aggregate(total=Sum('item_total'))['total'] or 0

        cart.total = total
        cart.save()

        serializer = CartItemSerializer(cartitem)
        return Response({"data": serializer.data, "message": "Item adicionado ao carrinho"}, status=201)

    except Product.DoesNotExist:
        return Response({"error": "Produto não encontrado."}, status=404)
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

@api_view(["GET"])
def get_cart_start(request):
    cart_code= request.query_params.get("cart_code")
    cart = Cart.objects.get(cart_code=cart_code)
    serializer = SimpleCartSerializer(cart)
    return Response(serializer.data)