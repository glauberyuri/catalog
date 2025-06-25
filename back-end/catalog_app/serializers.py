from rest_framework import serializers
from .models import Product, Cart, CartItem, Colors

class ColorSerializer(serializers.ModelSerializer) :
    class Meta: 
        model = Colors
        field = ["id", "name", "value"]

class ProductSerializer(serializers.ModelSerializer) :  
    colors = ColorSerializer(read_only=True)
    class Meta:
        model = Product
        fields = ["id", "name", "slug", "image", "description", "category", "price", "colors", "size"]

class DetailedProductSerializer(serializers.ModelSerializer):
    similar_products = serializers.SerializerMethodField()
    class Meta: 
        model= Product
        fields = ["id", "name", "price", "slug", "image", "description", "similar_products"]

    def get_similar_products(self, product):
        products = Product.objects.filter(category=product.category).exclude(id=product.id)
        serializer =  ProductSerializer(products, many=True)
        return serializer.data
    
class CartSerializer(serializers.ModelSerializer) :
    class Meta:
        model = Cart
        fields = ["id", "cart_code", "status","total","created_at"]

class CartItemSerializer(serializers.ModelSerializer) :
    product = ProductSerializer(read_only=True)
    cart = CartSerializer(read_only=True)
    class Meta:
        model = CartItem
        fields = ["id", "quantity", "cart", "product"]

class SimpleCartSerializer(serializers.ModelSerializer):
    num_of_items= serializers.SerializerMethodField() 
    class Meta:
        model = Cart
        fields = ["id", "cart_code", "num_of_items"]

    def get_num_of_items(self, cart):
        num_of_items = sum([item.quantity for item in cart.items.all()])
        return num_of_items