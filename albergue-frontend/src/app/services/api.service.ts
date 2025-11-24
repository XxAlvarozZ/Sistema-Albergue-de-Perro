import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Perro {
  id?: number;
  nombre: string;
  raza?: string;
  edad?: number;
  tamano?: string;
  creado_en?: string;
}

export interface Donacion {
  id?: number;
  nombre_donante?: string;
  mensaje?: string;
  monto?: number;
  creado_en?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api'; // cambia si tu backend corre en otro lado

  constructor(private http: HttpClient) {}

  crearPerro(data: Perro): Observable<Perro> {
    return this.http.post<Perro>(`${this.baseUrl}/perros/`, data);
  }

  listarPerros(): Observable<Perro[]> {
    return this.http.get<Perro[]>(`${this.baseUrl}/perros/`);
  }

  crearDonacion(data: Donacion): Observable<Donacion> {
    return this.http.post<Donacion>(`${this.baseUrl}/donaciones/`, data);
  }

  listarDonaciones(): Observable<Donacion[]> {
    return this.http.get<Donacion[]>(`${this.baseUrl}/donaciones/`);
  }
}