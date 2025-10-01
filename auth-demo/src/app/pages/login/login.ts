import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { SafeStorageService } from '../../services/storage';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  API = 'http://localhost:8000';
  //private readonly storage = inject(SaveStorageService)

  constructor(private http: HttpClient, private router: Router, private storage: SafeStorageService) {}

  
  login() {
  this.http.post<any>(`${this.API}/login`, {
    username: this.username.trim(),
    password: this.password.trim()
  }).subscribe({
    next: (res) => {
        console.log("respuesta",res)
        this.storage.setToken(res.access_token)
        console.log("token guardado",this.storage.getToken())
      this.router.navigateByUrl('/landing');  // navegar a landing
    },
    error: () => alert('Usuario o contraseña incorrectos')
  });
}

}
