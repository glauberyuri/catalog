from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path("products", views.products, name="products"),
    path("detail_product/<slug:slug>", views.product_detail, name="product_detail")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)