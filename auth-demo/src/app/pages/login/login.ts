// src/app/pages/login/login.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Directivas para el HTML
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  // ESTA ES LA LÍNEA MÁS IMPORTANTE: LA "CAJA DE HERRAMIENTAS"
  imports: [
    CommonModule,  // <-- Habilita *ngIf, *ngFor, etc.
    FormsModule    // <-- Habilita [(ngModel)] y formularios
  ],
  templateUrl: './login.html',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = new URLSearchParams();
    body.set('username', this.username);
    body.set('password', this.password);

    this.http.post<any>('http://localhost:8000/login', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.access_token);
        this.router.navigateByUrl('/landing');
      },
      error: () => {
        this.error = 'Usuario o contraseña incorrectos';
      }
    });
  }
}