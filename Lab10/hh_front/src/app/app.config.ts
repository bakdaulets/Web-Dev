// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // <-- Импортируй provideHttpClient

import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser'; // <-- Можно убрать, если нет SSR

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideClientHydration(withEventReplay()), // <-- Можно убрать
    provideHttpClient(withInterceptorsFromDi()) // <-- Добавь для HttpClient
  ]
};
