import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const http = inject(HttpClient);
  const router = inject(Router);
  const API = 'http://localhost:8000';

  const token = localStorage.getItem('token');
  if (!token) {
    router.navigateByUrl('/login');
    return false;
  }

  return http.get(`${API}/landing`).pipe(
    map(() => true),
    catchError(() => {
      localStorage.removeItem('token');
      router.navigateByUrl('/login');
      return of(false);
    })
  );
};