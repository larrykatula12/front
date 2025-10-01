// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
// 👇 **CORRIGE LA MAYÚSCULA AQUÍ**
import { authInterceptor } from './auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // 👇 **Y USA EL NOMBRE CORRECTO AQUÍ TAMBIÉN**
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};