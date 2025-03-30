from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductList.as_view(), name='product-list'),
    path('products/<int:id>/', views.ProductDetail.as_view(), name='product-detail'),
    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('categories/<int:id>/', views.CategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', views.CategoryProductsList.as_view(), name='category-products'),
]