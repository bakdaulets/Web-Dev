// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируй CommonModule
import { RouterOutlet } from '@angular/router'; // Если используешь роутинг
import { CompanyListComponent } from './company-list/company-list.component'; // Импортируй CompanyListComponent
// import { HttpClientModule } from '@angular/common/http'; // Можно импортировать здесь, но лучше через provideHttpClient

@Component({
  selector: 'app-root',
  standalone: true, // <-- Сделать standalone
  imports: [
      CommonModule, // <-- Добавить CommonModule
      // RouterOutlet, // <-- Добавить, если используется <router-outlet>
      CompanyListComponent, // <-- Импортировать компонент здесь
      // HttpClientModule // <-- Можно добавить сюда, если не используешь provideHttpClient
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
}
