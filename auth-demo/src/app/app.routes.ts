import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { LandingComponent } from './pages/landing/landing';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];