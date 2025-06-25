from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path("products", views.products, name="products"),
    path("detail_product/<slug:slug>", views.product_detail, name="product_detail"),
    path("add_item/", views.add_item, name="add_item"),
    path("product_in_cart", views.product_in_cart, name="product_in_cart"),
    path("get_cart_start", views.get_cart_start, name="get_cart_start")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)