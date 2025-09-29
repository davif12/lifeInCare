import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {
  private apiUrl = 'http://localhost:3006'; // URL do backend NestJS

  constructor(private http: HttpClient) { }

  // Cadastrar um novo cuidador
  registrar(cuidador: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, cuidador);
  }

  // Obter perfil do cuidador (para uso futuro)
  getPerfil(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/caregivers/${id}`);
  }
}
