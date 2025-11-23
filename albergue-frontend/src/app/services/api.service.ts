import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://127.0.0.1:8000'; // tu backend Python

  constructor(private http: HttpClient) {}

  registrarPerro(data: any): Observable<any> {
    return this.http.post(`${this.url}/registrar-perro`, data);
  }

  enviarDonacion(data: any): Observable<any> {
    return this.http.post(`${this.url}/donacion`, data);
  }
}
