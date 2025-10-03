import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SafeStorageService {
  private memory = new Map<string, string>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private get ls(): Storage | null {
    if (isPlatformBrowser(this.platformId)) {
      try {
        return localStorage;
      } catch {
        return null;
      }
    }
    return null;
  }

  getItem(key: string): string | null {
    const s = this.ls;
    return s ? s.getItem(key) : this.memory.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    const s = this.ls;
    if (s) s.setItem(key, value);
    else this.memory.set(key, value);
  }

  removeItem(key: string): void {
    const s = this.ls;
    if (s) s.removeItem(key);
    else this.memory.delete(key);
  }

  clear(): void {
    const s = this.ls;
    if (s) s.clear();
    else this.memory.clear();
  }

  // Métodos conveniencia
  setToken(token: string): void {
    this.setItem('token', token);
  }

  getToken(): string | null {
    return this.getItem('token');
  }

  removeToken(): void {
    this.removeItem('token');
  }
}