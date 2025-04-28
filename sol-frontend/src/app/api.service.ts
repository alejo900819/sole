import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Cambia esta URL según tu configuración de backend

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  getPerfil(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/perfil/${id}`);
  }

  getPublicaciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}/publicaciones`);
  }

  registrarUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, data);
  }
}
