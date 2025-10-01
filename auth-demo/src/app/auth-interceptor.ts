// src/app/auth-interceptor.ts

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Obtenemos el token del localStorage
  const token = localStorage.getItem('token');

  // Si el token existe...
  if (token) {
    // Clonamos la petición original y le añadimos la cabecera de autorización
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Dejamos que la petición continúe su camino
  return next(req);
};