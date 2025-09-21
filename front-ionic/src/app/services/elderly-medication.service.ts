import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ElderlyService } from './elderly.service';

export interface ElderlyMedication {
  id?: string;
  elderlyUserId: string;
  caregiverUserId: string;
  name: string;
  dosage: string;
  frequency: string;
  schedules: string[];
  startDate: string;
  endDate?: string;
  instructions?: string;
  isActive?: boolean;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MedicationSummary {
  totalMedications: number;
  activeMedications: number;
  inactiveMedications: number;
  todayDoses: number;
  nextDose?: {
    medicationName: string;
    time: string;
    dosage: string;
  };
  recentMedications: {
    name: string;
    dosage: string;
    frequency: string;
    createdAt: Date;
  }[];
}

export interface TodaySchedule {
  medicationName: string;
  dosage: string;
  time: string;
  instructions?: string;
}

export interface ElderlyDashboard {
  user: {
    name: string;
    role: string;
  };
  summary: MedicationSummary;
  activeMedications: ElderlyMedication[];
  todaySchedule: TodaySchedule[];
}

@Injectable({
  providedIn: 'root'
})
export class ElderlyMedicationService {
  private apiUrl = 'http://localhost:3001';

  constructor(
    private http: HttpClient,
    private elderlyService: ElderlyService
  ) { }

  private getHeaders(): HttpHeaders {
    const token = this.elderlyService.getElderlyToken();
    if (!token) {
      throw new Error('Token de idoso não encontrado. Faça login novamente.');
    }
    
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  /**
   * Buscar todos os medicamentos do idoso logado
   */
  getMyMedications(): Observable<ElderlyMedication[]> {
    console.log('=== FRONTEND: Buscando medicamentos do idoso ===');
    
    return this.http.get<ElderlyMedication[]>(`${this.apiUrl}/elderly/medications/my-medications`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Medicamentos do idoso recebidos:', response);
      }),
      catchError(error => {
        console.error('Erro ao buscar medicamentos do idoso:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Buscar apenas medicamentos ativos do idoso logado
   */
  getActiveMedications(): Observable<ElderlyMedication[]> {
    console.log('=== FRONTEND: Buscando medicamentos ativos do idoso ===');
    
    return this.http.get<ElderlyMedication[]>(`${this.apiUrl}/elderly/medications/active`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Medicamentos ativos do idoso recebidos:', response);
      }),
      catchError(error => {
        console.error('Erro ao buscar medicamentos ativos do idoso:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Buscar horários de medicamentos para hoje
   */
  getTodaySchedule(): Observable<TodaySchedule[]> {
    console.log('=== FRONTEND: Buscando horários de hoje ===');
    
    return this.http.get<TodaySchedule[]>(`${this.apiUrl}/elderly/medications/today-schedule`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Horários de hoje recebidos:', response);
      }),
      catchError(error => {
        console.error('Erro ao buscar horários de hoje:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Buscar resumo de medicamentos do idoso
   */
  getSummary(): Observable<MedicationSummary> {
    console.log('=== FRONTEND: Buscando resumo de medicamentos ===');
    
    return this.http.get<MedicationSummary>(`${this.apiUrl}/elderly/medications/summary`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Resumo de medicamentos recebido:', response);
      }),
      catchError(error => {
        console.error('Erro ao buscar resumo de medicamentos:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Buscar dashboard completo do idoso
   */
  getDashboard(): Observable<ElderlyDashboard> {
    console.log('=== FRONTEND: Buscando dashboard do idoso ===');
    
    return this.http.get<ElderlyDashboard>(`${this.apiUrl}/elderly/medications/dashboard`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Dashboard do idoso recebido:', response);
      }),
      catchError(error => {
        console.error('Erro ao buscar dashboard do idoso:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Verificar se o idoso está autenticado
   */
  isAuthenticated(): boolean {
    return this.elderlyService.isElderlyLoggedIn();
  }

  /**
   * Fazer logout do idoso
   */
  logout(): void {
    this.elderlyService.elderlyLogout();
  }
}
