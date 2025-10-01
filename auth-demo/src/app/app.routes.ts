// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login';
import { LandingComponent } from '../app/pages/landing/landing';
import { AuthGuard } from '../app/auth-guard';

export const routes: Routes = [

    
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },

];
