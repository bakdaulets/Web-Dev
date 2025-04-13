# api/serializers.py
from rest_framework import serializers
from .models import Company, Vacancy

# Используем serializers.Serializer для Company
# Требует явного определения полей и методов create/update
class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True) # ID только для чтения
    name = serializers.CharField(max_length=255, required=True)
    description = serializers.CharField(allow_blank=True, required=False) # allow_blank=True значит "" - валидное значение
    city = serializers.CharField(max_length=100, required=True)
    address = serializers.CharField(allow_blank=True, required=False)

    def create(self, validated_data):
        """
        Создание и возврат нового объекта Company на основе проверенных данных.
        """
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Обновление и возврат существующего объекта Company.
        'instance' - это объект Company, который нужно обновить.
        'validated_data' - словарь с данными для обновления.
        """
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save() # Сохраняем изменения в базе данных
        return instance

# Используем serializers.ModelSerializer для Vacancy (как и раньше)
# Автоматически определяет поля и базовые create/update
class VacancySerializer(serializers.ModelSerializer):
    # Добавим поле company_id для явности при POST/PUT запросах
    # company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all()) # Можно так, если нужно передавать только ID
    company_id = serializers.IntegerField(write_only=True) # Поле только для записи ID компании

    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company_id', 'company') # Включаем и company_id и объект company (read-only)
        read_only_fields = ('company',) # Поле company будет только для чтения (детали компании)

    # Можно переопределить to_representation для кастомизации вывода JSON
    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     # Добавляем детали компании в ответ
    #     representation['company'] = CompanySerializer(instance.company).data
    #     return representation