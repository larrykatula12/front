// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { LandingComponent } from './pages/landing/landing';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  // Ruta para el componente de login
  { path: 'login', component: LoginComponent },
  // Ruta protegida que solo se puede activar si el authGuard lo permite
  { path: 'landing', component: LandingComponent, canActivate: [authGuard] },
  // Si la ruta está vacía, redirige a /login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];