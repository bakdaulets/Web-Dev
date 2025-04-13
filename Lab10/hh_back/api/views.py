# api/views.py
from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView # Базовый класс для CBV
from rest_framework import generics # Готовые CBV для CRUD

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# --- Company CRUD (Function-Based Views) ---

@api_view(['GET', 'POST']) # Разрешаем GET и POST
def company_list_create(request):
    """
    List all companies, or create a new company.
    """
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data) # Передаем данные из запроса
        if serializer.is_valid(): # Проверяем валидность данных
            serializer.save() # Вызывает метод create() в сериализаторе
            return Response(serializer.data, status=status.HTTP_201_CREATED) # Возвращаем созданный объект и статус 201
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Возвращаем ошибки валидации

@api_view(['GET', 'PUT', 'DELETE']) # Разрешаем GET, PUT, DELETE
def company_detail_update_delete(request, id):
    """
    Retrieve, update or delete a company instance.
    """
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND) # Ошибка 404 если не найдено

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT': # PUT - полное обновление объекта
        serializer = CompanySerializer(instance=company, data=request.data) # Передаем объект для обновления и новые данные
        if serializer.is_valid():
            serializer.save() # Вызывает метод update() в сериализаторе
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        company.delete() # Удаляем объект из базы
        return Response(status=status.HTTP_204_NO_CONTENT) # Возвращаем статус 204 (успешно удалено, нет содержимого)


# --- Vacancy CRUD (Class-Based Views using DRF Generics) ---

class VacancyListCreateAPIView(generics.ListCreateAPIView):
    """
    List all vacancies, or create a new vacancy. (GET, POST)
    """
    queryset = Vacancy.objects.all() # Откуда брать объекты
    serializer_class = VacancySerializer # Какой сериализатор использовать

    # Можно переопределить perform_create, если нужно что-то сделать при создании
    # def perform_create(self, serializer):
    #     # Например, установить автора вакансии, если есть аутентификация
    #     # serializer.save(author=self.request.user)
    #     serializer.save()

class VacancyRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a vacancy instance. (GET, PUT, PATCH, DELETE)
    """
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    # lookup_field = 'id' # По какому полю искать объект в URL (по умолчанию 'pk')


# --- Оставляем специфичные эндпоинты из Lab 9 (можно их тоже переделать на CBV при желании) ---

# /api/companies/<int:id>/vacancies/ - Список вакансий по компании
@api_view(['GET'])
def company_vacancies(request, id):
    company = get_object_or_404(Company, pk=id)
    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

# /api/vacancies/top_ten/ - Список топ 10 вакансий по убыванию зарплаты
@api_view(['GET'])
def vacancy_top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)