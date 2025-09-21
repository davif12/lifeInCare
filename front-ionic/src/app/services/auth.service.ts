import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001';
  private tokenKey = 'auth_token';
  private userKey = 'auth_user';
  private savedEmailsKey = 'saved_emails';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap(response => {
          if (response && response.access_token) {
            this.setToken(response.access_token);
            if (response.user) {
              this.setUser(response.user);
              this.saveEmail(email); // Salva o email para sugestões futuras
            }
          }
        }),
        catchError(error => {
          return throwError(() => error);
        })
      );
  }

  logout(): void {
    this.clearAuth();
    this.router.navigate(['/entrada']);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): any {
    const userStr = localStorage.getItem(this.userKey);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        this.clearAuth();
        return null;
      }
    }
    return null;
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private setUser(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  private clearAuth(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  // Métodos para gerenciar emails salvos
  private saveEmail(email: string): void {
    const savedEmails = this.getSavedEmails();
    if (!savedEmails.includes(email)) {
      savedEmails.unshift(email); // Adiciona no início da lista
      // Mantém apenas os últimos 5 emails
      const limitedEmails = savedEmails.slice(0, 5);
      localStorage.setItem(this.savedEmailsKey, JSON.stringify(limitedEmails));
    }
  }

  getSavedEmails(): string[] {
    const savedEmails = localStorage.getItem(this.savedEmailsKey);
    return savedEmails ? JSON.parse(savedEmails) : [];
  }

  removeSavedEmail(email: string): void {
    const savedEmails = this.getSavedEmails();
    const filteredEmails = savedEmails.filter(e => e !== email);
    localStorage.setItem(this.savedEmailsKey, JSON.stringify(filteredEmails));
  }
}
