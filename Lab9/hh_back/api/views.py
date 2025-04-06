from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

@api_view(['GET'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, id):
    company = get_object_or_404(Company, pk=id)
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

@api_view(['GET'])
def company_vacancies(request, id):
    company = get_object_or_404(Company, pk=id)
    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

@api_view(['GET'])
def vacancy_top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
