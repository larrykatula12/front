import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingComponent implements OnInit {
  message = '';
  API = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
}
