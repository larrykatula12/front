import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { SafeStorageService } from './services/storage';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  private API = 'http://localhost:8000';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: SafeStorageService
  ) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    console.log('[AuthGuard] ejecutado');
    const token = this.storage.getToken();
    console.log('[AuthGuard] token:', token);

    if (!token) {
      return this.router.parseUrl('/login');
    }

    // 👉 Configuramos headers con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Validamos el token contra tu endpoint
    return this.http.get(`${this.API}/landing`, { headers }).pipe(
      map(() => true),
      catchError(() => {
        console.log('[AuthGuard] token inválido');
        this.storage.removeToken();
        return of(this.router.parseUrl('/login'));
      })
    );
  }
}
