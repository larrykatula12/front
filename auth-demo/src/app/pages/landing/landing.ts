// src/app/pages/landing/landing.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.html',
})
export class LandingComponent implements OnInit {
  message = '';
  API = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
}