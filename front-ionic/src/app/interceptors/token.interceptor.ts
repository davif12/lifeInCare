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
  
  // Get the token from the auth service
  const token = authService.getToken();
  
  // If we have a token, add it to the request
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  // Pass the request to the next handler and catch any errors
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // If we get a 401 Unauthorized response, the token might be expired or invalid
      if (error.status === 401) {
        authService.clearAuthData();
        router.navigate(['/login-cuidador']);
      }
      return throwError(() => error);
    })
  );
};
