import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class ElderlyService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // Cadastrar um novo idoso
  registerElderly(elderlyData: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(`${this.apiUrl}/elderly/signup`, elderlyData, { headers });
  }

  // Obter todos os idosos do cuidador autenticado
  getElderlies(): Observable<any[]> {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Token não encontrado');
      return throwError(() => new Error('Não autenticado'));
    }
    
    console.log('Token do cuidador:', token);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    console.log('Fazendo requisição GET para:', `${this.apiUrl}/elderly`);
    
    return this.http.get<any[]>(`${this.apiUrl}/elderly`, { headers })
      .pipe(
        tap(response => {
          console.log('Resposta da API (idosos):', response);
        }),
        catchError(error => {
          console.error('Erro na API (idosos):', error);
          return throwError(() => error);
        })
      );
  }

  // Obter um idoso específico
  getElderly(id: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/elderly/${id}`, { headers })
      .pipe(
        tap(response => {
          console.log('Resposta da API (idoso específico):', response);
        }),
        catchError(error => {
          console.error('Erro na API (idoso específico):', error);
          return throwError(() => error);
        })
      );
  }

  // Atualizar dados de um idoso
  updateElderly(id: string, elderlyData: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<any>(`${this.apiUrl}/elderly/${id}`, elderlyData, { headers });
  }

  // Remover um idoso
  deleteElderly(id: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete<any>(`${this.apiUrl}/elderly/${id}`, { headers });
  }
  
  // Validar PIN de acesso do idoso
  validatePin(pin: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<any>(`${this.apiUrl}/elderly/login`, { pin }, { headers });
  }
  
  // Salvar o token do idoso
  saveElderlyToken(token: string): void {
    localStorage.setItem('elderly_token', token);
  }
  
  // Obter o token do idoso
  getElderlyToken(): string | null {
    return localStorage.getItem('elderly_token');
  }
  
  // Verificar se o idoso está logado
  isElderlyLoggedIn(): boolean {
    return !!this.getElderlyToken();
  }
  
  // Logout do idoso
  elderlyLogout(): void {
    localStorage.removeItem('elderly_token');
  }
}
