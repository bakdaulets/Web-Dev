# api/urls.py
from django.urls import path
from . import views # Импортируем наши view функции и классы

urlpatterns = [
    # Company URLs (FBV)
    path('companies/', views.company_list_create, name='company-list-create'), # GET, POST
    path('companies/<int:id>/', views.company_detail_update_delete, name='company-detail-update-delete'), # GET, PUT, DELETE

    # Vacancy URLs (CBV)
    path('vacancies/', views.VacancyListCreateAPIView.as_view(), name='vacancy-list-create'), # GET, POST
    path('vacancies/<int:pk>/', views.VacancyRetrieveUpdateDestroyAPIView.as_view(), name='vacancy-detail-update-delete'), # GET, PUT, PATCH, DELETE (используем pk вместо id для CBV по умолчанию)

    # Specific URLs (оставляем как есть или переделываем на CBV)
    path('companies/<int:id>/vacancies/', views.company_vacancies, name='company-vacancies'), # GET
    path('vacancies/top_ten/', views.vacancy_top_ten, name='vacancy-top-ten'), # GET
]