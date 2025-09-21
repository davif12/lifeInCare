import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {
  private apiUrl = environment.apiUrl; // URL do backend NestJS

  constructor(private http: HttpClient) { }

  // Cadastrar um novo cuidador
  registrar(cuidador: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/caregivers/signup`, cuidador);
  }

  // Obter perfil do cuidador (para uso futuro)
  getPerfil(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/caregivers/${id}`);
  }
}
