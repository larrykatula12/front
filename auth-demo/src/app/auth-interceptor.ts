// src/app/auth-interceptor.ts

import { HttpInterceptorFn } from '@angular/common/http';

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