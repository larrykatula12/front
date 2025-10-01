// src/app/auth-guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// La función del guardián de la ruta
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  // Verificamos si existe un token en el localStorage
  const token = localStorage.getItem('token');

  // Si no hay token...
  if (!token) {
    // Redirigimos al usuario a la página de login
    router.navigateByUrl('/login');
    return false; // No permitimos el acceso
  }

  // Si hay un token, permitimos el acceso a la ruta
  return true;
};