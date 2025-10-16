import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

// Função interceptora para usar com withInterceptors
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  // Verificar se estamos no contexto do idoso
  const isElderlyContext = isElderlyRoute() || isElderlyRequest(req.url);
  
  let token: string | null = null;
  
  if (isElderlyContext) {
    // Usar token do idoso
    token = localStorage.getItem('elderly_token');
    console.log('🔍 Interceptor: Usando token do idoso:', !!token);
  } else {
    // Usar token do cuidador
    token = authService.getToken();
    console.log('🔍 Interceptor: Usando token do cuidador:', !!token);
  }
  
  // If we have a token, add it to the request
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('✅ Token adicionado ao header Authorization');
  } else {
    console.log('❌ Nenhum token disponível');
  }
  
  // Pass the request to the next handler and catch any errors
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('❌ Erro HTTP interceptado:', error.status, error.url);
      
      // If we get a 401 Unauthorized response, the token might be expired or invalid
      if (error.status === 401) {
        if (isElderlyContext) {
          // Limpar token do idoso e redirecionar
          localStorage.removeItem('elderly_token');
          router.navigate(['/entrada']);
        } else {
          // Limpar token do cuidador e redirecionar
          authService.logout();
        }
      }
      return throwError(() => error);
    })
  );
};

// Função para verificar se estamos em uma rota do idoso
function isElderlyRoute(): boolean {
  const currentUrl = window.location.pathname;
  const elderlyRoutes = [
    '/meus-medicamentos',
    '/my-consultations',
    '/home-idoso',
    '/medicamentos-hoje'
  ];
  
  return elderlyRoutes.some(route => currentUrl.includes(route));
}

// Função para verificar se é uma requisição relacionada ao idoso
function isElderlyRequest(url: string): boolean {
  const elderlyEndpoints = [
    '/elderly/medications',
    '/reminders/sorted-by-next-occurrence',
    '/consultations/my-consultations'
  ];
  
  return elderlyEndpoints.some(endpoint => url.includes(endpoint));
}
