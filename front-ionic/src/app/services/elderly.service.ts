import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environment';

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
    console.log('Token para cadastro:', token);
    console.log('Dados do idoso:', elderlyData);
    console.log('URL da requisição:', `${this.apiUrl}/elderly/signup`);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(`${this.apiUrl}/elderly/signup`, elderlyData, { headers })
      .pipe(
        tap(response => {
          console.log('Resposta do cadastro:', response);
        }),
        catchError(error => {
          console.error('Erro detalhado no cadastro:', error);
          console.error('Status:', error.status);
          console.error('URL:', error.url);
          console.error('Mensagem:', error.message);
          return throwError(() => error);
        })
      );
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
    console.log('=== FRONTEND: VALIDANDO PIN ===');
    console.log('PIN enviado:', pin);
    console.log('URL da requisição:', `${this.apiUrl}/elderly/login`);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<any>(`${this.apiUrl}/elderly/login`, { pin }, { headers })
      .pipe(
        tap(response => {
          console.log('=== RESPOSTA DO LOGIN ===');
          console.log('Resposta completa:', response);
          console.log('access_token existe:', !!response?.access_token);
          console.log('access_token:', response?.access_token);
          console.log('user:', response?.user);
        }),
        catchError(error => {
          console.error('=== ERRO NO LOGIN ===');
          console.error('Erro completo:', error);
          console.error('Status:', error.status);
          console.error('URL:', error.url);
          console.error('Mensagem:', error.message);
          console.error('Response body:', error.error);
          return throwError(() => error);
        })
      );
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
