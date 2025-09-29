import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environment';

export enum ReminderType {
  MEDICATION = 'medication',
  APPOINTMENT = 'appointment',
  EXERCISE = 'exercise',
  MEAL = 'meal',
  GENERAL = 'general',
}

export enum ReminderFrequency {
  ONCE = 'once',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  CUSTOM = 'custom',
}

export enum ReminderStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  SNOOZED = 'snoozed',
  CANCELLED = 'cancelled',
}

export interface Reminder {
  id?: string;
  title: string;
  description: string;
  type: ReminderType;
  reminderDateTime: string;
  frequency: ReminderFrequency;
  status?: ReminderStatus;
  customIntervalMinutes?: number;
  endDate?: string;
  priority?: number;
  sendNotification?: boolean;
  notificationMinutesBefore?: number;
  notes?: string;
  patientId: string;
  lastExecuted?: Date;
  nextExecution?: Date;
  nextOccurrence?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  elderlyUser?: any;
  caregiverUser?: any;
}

export interface ReminderQueryParams {
  status?: ReminderStatus;
  page?: number;
  limit?: number;
  elderlyUserId?: string;
}

export interface ReminderResponse {
  data: Reminder[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private apiUrl = environment.apiUrl;

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

  // Criar novo lembrete
  createReminder(reminderData: Reminder): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reminders`, reminderData, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembrete criado:', response)),
        catchError(error => {
          console.error('Erro ao criar lembrete:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter todos os lembretes do cuidador
  getAllReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${this.apiUrl}/reminders`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembretes obtidos:', response)),
        catchError(error => {
          console.error('Erro ao obter lembretes:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter lembretes próximos
  getUpcomingReminders(hours: number = 24): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${this.apiUrl}/reminders/upcoming?hours=${hours}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembretes próximos:', response)),
        catchError(error => {
          console.error('Erro ao obter lembretes próximos:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter lembretes ativos
  getActiveReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${this.apiUrl}/reminders/active`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembretes ativos:', response)),
        catchError(error => {
          console.error('Erro ao obter lembretes ativos:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter lembretes de um paciente específico
  getRemindersByPatient(patientId: string): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${this.apiUrl}/reminders/patient/${patientId}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembretes do paciente:', response)),
        catchError(error => {
          console.error('Erro ao obter lembretes do paciente:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter um lembrete específico
  getReminder(id: string): Observable<Reminder> {
    return this.http.get<Reminder>(`${this.apiUrl}/reminders/${id}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembrete específico:', response)),
        catchError(error => {
          console.error('Erro ao obter lembrete:', error);
          return throwError(() => error);
        })
      );
  }

  // Atualizar lembrete
  updateReminder(id: string, reminderData: Partial<Reminder>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/reminders/${id}`, reminderData, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembrete atualizado:', response)),
        catchError(error => {
          console.error('Erro ao atualizar lembrete:', error);
          return throwError(() => error);
        })
      );
  }

  // Remover lembrete
  deleteReminder(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/reminders/${id}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembrete removido:', response)),
        catchError(error => {
          console.error('Erro ao remover lembrete:', error);
          return throwError(() => error);
        })
      );
  }

  // Marcar lembrete como concluído
  markAsCompleted(id: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/reminders/${id}/complete`, {}, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembrete marcado como concluído:', response)),
        catchError(error => {
          console.error('Erro ao marcar lembrete como concluído:', error);
          return throwError(() => error);
        })
      );
  }

  // Adiar lembrete
  snoozeReminder(id: string, minutes: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/reminders/${id}/snooze/${minutes}`, {}, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembrete adiado:', response)),
        catchError(error => {
          console.error('Erro ao adiar lembrete:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter lembretes ordenados por próxima ocorrência
  getRemindersSortedByNextOccurrence(params?: ReminderQueryParams): Observable<ReminderResponse> {
    const queryParams = new URLSearchParams();
    
    if (params?.status) queryParams.append('status', params.status);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.elderlyUserId) queryParams.append('elderlyUserId', params.elderlyUserId);

    const url = `${this.apiUrl}/reminders/sorted-by-next-occurrence${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    
    return this.http.get<ReminderResponse>(url, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Lembretes ordenados por próxima ocorrência:', response)),
        catchError(error => {
          console.error('Erro ao obter lembretes ordenados:', error);
          return throwError(() => error);
        })
      );
  }
}
