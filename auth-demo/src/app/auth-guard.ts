import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private API = 'http://localhost:8000';

  constructor(private http: HttpClient, private router: Router) {}

  canActivate() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return this.http.get(`${this.API}/landing`).pipe(
      map(() => true),
      catchError(() => {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
        return of(false);
      })
    );
  }
}
