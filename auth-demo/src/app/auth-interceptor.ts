// auth.interceptor.ts (Angular 20, funcional)
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SafeStorageService } from './services/storage';

const SKIP_URLS = ['/auth/login', '/auth/refresh']; // opcional

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = inject(SafeStorageService);
  const token = storage.getToken();
  console.log("token desde interceptor",token)
  // 1) Si es una URL que quieres saltar: SIEMPRE retorna next(req)
  if (SKIP_URLS.some(u => req.url.includes(u))) {
    return next(req); // ✅ Observable<HttpEvent<any>>
  }

  // 2) Si no hay token o ya viene Authorization: SIEMPRE next(req)
  if (!token || req.headers.has('Authorization')) {
    return next(req); // ✅
  }

  // 3) Con token: clona y retorna next(authReq)
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` },
  });

  return next(authReq); // ✅
};