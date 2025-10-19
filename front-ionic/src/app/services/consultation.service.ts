import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environment';

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
  elderlyUserId: string;
  caregiverUserId?: string;
  elderlyUser?: any;
  caregiverUser?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // Criar nova consulta
  createConsultation(consultationData: Consultation): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/consultations`, consultationData)
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
    return this.http.get<Consultation[]>(`${this.apiUrl}/consultations`)
      .pipe(
        tap(response => console.log('Consultas obtidas:', response)),
        catchError(error => {
          console.error('Erro ao obter consultas:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter minhas consultas (funciona para idoso e cuidador)
  getMyConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiUrl}/consultations/my-consultations`)
      .pipe(
        tap(response => console.log('Minhas consultas:', response)),
        catchError(error => {
          console.error('Erro ao obter minhas consultas:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter consultas futuras
  getUpcomingConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiUrl}/consultations/upcoming`)
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
    return this.http.get<Consultation[]>(`${this.apiUrl}/consultations/patient/${patientId}`)
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
    return this.http.get<Consultation>(`${this.apiUrl}/consultations/${id}`)
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
    return this.http.patch<any>(`${this.apiUrl}/consultations/${id}`, consultationData)
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
    return this.http.delete<any>(`${this.apiUrl}/consultations/${id}`)
      .pipe(
        tap(response => console.log('Consulta removida:', response)),
        catchError(error => {
          console.error('Erro ao remover consulta:', error);
          return throwError(() => error);
        })
      );
  }

  // Atualizar status da consulta (para cuidador)
  updateConsultationStatus(id: string, status: ConsultationStatus): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/consultations/${id}/status/${status}`, {})
      .pipe(
        tap(response => console.log('Status da consulta atualizado:', response)),
        catchError(error => {
          console.error('Erro ao atualizar status da consulta:', error);
          return throwError(() => error);
        })
      );
  }

  // Atualizar status da consulta (para idoso)
  updateConsultationStatusByElderly(id: string, status: ConsultationStatus): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/elderly/consultations/${id}/status/${status}`, {})
      .pipe(
        tap(response => console.log('Status da consulta atualizado pelo idoso:', response)),
        catchError(error => {
          console.error('Erro ao atualizar status da consulta pelo idoso:', error);
          return throwError(() => error);
        })
      );
  }
}
