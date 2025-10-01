// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/auth-interceptor';

// Configuración de arranque de la aplicación
bootstrapApplication(AppComponent, {
  providers: [
    // Proveedor para las rutas de la aplicación
    provideRouter(routes),
    // Proveedor para HttpClient con nuestro interceptor de autenticación
    provideHttpClient(withInterceptors([authInterceptor])),
    // Importamos FormsModule para poder usar ngModel en los inputs del login
    importProvidersFrom(FormsModule),
  ],
});