// src/app/company-list/company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Импортируй CommonModule
import { ApiService } from '../api.service';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';

@Component({
  selector: 'app-company-list',
  standalone: true, // <-- Сделать standalone
  imports: [ CommonModule ], // <-- Добавить CommonModule
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  // ... остальной код компонента без изменений ...
  companies: Company[] = [];
  selectedCompany: Company | null = null;
  vacancies: Vacancy[] = [];
  loadingVacancies = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe(
      (data) => {
        this.companies = data;
        console.log('Companies loaded:', this.companies);
      },
      (error) => {
        console.error('Error loading companies:', error);
      }
    );
  }

  selectCompany(company: Company): void {
    this.selectedCompany = company;
    this.vacancies = [];
    this.loadingVacancies = true;
    console.log('Selected company:', this.selectedCompany.name);

    this.apiService.getCompanyVacancies(company.id).subscribe(
      (data) => {
        this.vacancies = data;
        this.loadingVacancies = false;
        console.log(`Vacancies for ${company.name}:`, this.vacancies);
      },
      (error) => {
        console.error(`Error loading vacancies for ${company.name}:`, error);
        this.loadingVacancies = false;
      }
    );
  }
}
