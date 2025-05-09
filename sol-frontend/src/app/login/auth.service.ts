import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth/login';

  constructor(private http: HttpClient) { }

  login(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
