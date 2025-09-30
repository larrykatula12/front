import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Landing } from './pages/landing/landing';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'landing', component: Landing, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];
