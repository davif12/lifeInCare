import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export enum ConsultationType {
  ROUTINE = 'routine',
  EMERGENCY = 'emergency',
  FOLLOW_UP = 'follow_up',
  SPECIALIST = 'specialist',
}

export enum ConsultationStatus {
  SCHEDULED = 'scheduled',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  RESCHEDULED = 'rescheduled',
}

export interface Consultation {
  id?: string;
  type: ConsultationType;
  doctorName: string;
  specialty: string;
  location: string;
  scheduledDateTime: string;
  status?: ConsultationStatus;
  reason: string;
  notes?: string;
  result?: string;
  prescriptions?: string;
  nextAppointment?: string;
  patientId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private apiUrl = 'http://localhost:3001';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // Criar nova consulta
  createConsultation(consultationData: Consultation): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/consultations`, consultationData, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Consulta criada:', response)),
        catchError(error => {
          console.error('Erro ao criar consulta:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter todas as consultas do cuidador
  getAllConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiUrl}/consultations`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Consultas obtidas:', response)),
        catchError(error => {
          console.error('Erro ao obter consultas:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter consultas futuras
  getUpcomingConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiUrl}/consultations/upcoming`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Consultas futuras:', response)),
        catchError(error => {
          console.error('Erro ao obter consultas futuras:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter consultas de um paciente específico
  getConsultationsByPatient(patientId: string): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiUrl}/consultations/patient/${patientId}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Consultas do paciente:', response)),
        catchError(error => {
          console.error('Erro ao obter consultas do paciente:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter uma consulta específica
  getConsultation(id: string): Observable<Consultation> {
    return this.http.get<Consultation>(`${this.apiUrl}/consultations/${id}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Consulta específica:', response)),
        catchError(error => {
          console.error('Erro ao obter consulta:', error);
          return throwError(() => error);
        })
      );
  }

  // Atualizar consulta
  updateConsultation(id: string, consultationData: Partial<Consultation>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/consultations/${id}`, consultationData, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Consulta atualizada:', response)),
        catchError(error => {
          console.error('Erro ao atualizar consulta:', error);
          return throwError(() => error);
        })
      );
  }

  // Remover consulta
  deleteConsultation(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/consultations/${id}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Consulta removida:', response)),
        catchError(error => {
          console.error('Erro ao remover consulta:', error);
          return throwError(() => error);
        })
      );
  }

  // Atualizar status da consulta
  updateConsultationStatus(id: string, status: ConsultationStatus): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/consultations/${id}/status/${status}`, {}, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Status da consulta atualizado:', response)),
        catchError(error => {
          console.error('Erro ao atualizar status da consulta:', error);
          return throwError(() => error);
        })
      );
  }
}
