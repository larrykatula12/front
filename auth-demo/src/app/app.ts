// src/app/app.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Importamos RouterOutlet para que las rutas funcionen
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'auth-demo';
}