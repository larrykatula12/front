// src/app/pages/landing/landing.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.html',
})
export class LandingComponent implements OnInit {
  message: string = 'Cargando...';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Hacemos una petición GET a la ruta protegida del backend
    this.http.get<any>('http://localhost:8000/landing').subscribe({
      next: (res) => {
        // Si la petición es exitosa, mostramos el mensaje del backend
        this.message = res.message;
      },
      error: (err) => {
        // Si el token es inválido o expiró, el backend dará error.
        // Limpiamos el token y lo mandamos al login.
        console.error('Error de autenticación:', err);
        this.logout();
      },
    });
  }

  logout() {
    // Borramos el token y redirigimos al login
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}