import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export interface CreateElderlyMedicationRequest {
  elderlyUserId: string;
  name: string;
  dosage: string;
  frequency: string;
  schedules: string[];
  startDate: string;
  endDate?: string;
  instructions?: string;
  notes?: string;
  isActive?: boolean;
}

export interface UpdateElderlyMedicationDto {
  name?: string;
  dosage?: string;
  frequency?: string;
  schedules?: string[];
  startDate?: string;
  endDate?: string;
  instructions?: string;
  notes?: string;
  isActive?: boolean;
}

export interface ElderlyMedication {
  id: string;
  elderlyUserId: string;
  caregiverUserId: string;
  name: string;
  dosage: string;
  frequency: string;
  schedules: string[];
  startDate: string;
  endDate?: string;
  instructions?: string;
  isActive: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CaregiverMedicationStats {
  total: number;
  active: number;
  inactive: number;
  elderlyCount: number;
}

export interface AvailableElderly {
  id: string;
  name: string;
  age?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CaregiverMedicationService {
  private apiUrl = 'http://localhost:3006';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('Token de cuidador não encontrado. Faça login novamente.');
    }
    
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  /**
   * Cadastrar novo medicamento para um idoso
   */
  createMedication(medicationData: CreateElderlyMedicationRequest): Observable<ElderlyMedication> {
    console.log('=== FRONTEND: Cadastrando medicamento para idoso ===');
    console.log('Dados do medicamento:', medicationData);
    
    return this.http.post<ElderlyMedication>(`${this.apiUrl}/caregiver/medications`, medicationData, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Medicamento cadastrado com sucesso:', response);
      }),
      catchError(error => {
        console.error('Erro ao cadastrar medicamento:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Buscar todos os medicamentos cadastrados pelo cuidador
   */
  getAllMedications(): Observable<ElderlyMedication[]> {
    console.log('=== FRONTEND: Buscando medicamentos do cuidador ===');
    
    return this.http.get<ElderlyMedication[]>(`${this.apiUrl}/caregiver/medications`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Medicamentos do cuidador recebidos:', response);
      }),
      catchError(error => {
        console.error('Erro ao buscar medicamentos do cuidador:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Buscar medicamentos de um idoso específico (pelo cuidador)
   */
  getMedicationsByElderly(elderlyUserId: string): Observable<ElderlyMedication[]> {
    console.log('=== FRONTEND: Buscando medicamentos de idoso específico ===');
    console.log('Idoso UserId:', elderlyUserId);
    
    return this.http.get<ElderlyMedication[]>(`${this.apiUrl}/caregiver/medications/elderly/${elderlyUserId}`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Medicamentos do idoso específico recebidos:', response);
      }),
      catchError(error => {
        console.error('Erro ao buscar medicamentos do idoso específico:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Buscar um medicamento específico
   */
  getMedication(id: string): Observable<ElderlyMedication> {
    console.log('=== FRONTEND: Buscando medicamento específico ===');
    console.log('Medicamento ID:', id);
    
    return this.http.get<ElderlyMedication>(`${this.apiUrl}/caregiver/medications/${id}`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Medicamento específico recebido:', response);
      }),
      catchError(error => {
        console.error('Erro ao buscar medicamento específico:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Atualizar medicamento
   */
  updateMedication(id: string, medicationData: UpdateElderlyMedicationDto): Observable<ElderlyMedication> {
    console.log('=== FRONTEND: Atualizando medicamento ===');
    console.log('Medicamento ID:', id);
    console.log('Dados de atualização:', medicationData);
    
    return this.http.patch<ElderlyMedication>(`${this.apiUrl}/caregiver/medications/${id}`, medicationData, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Medicamento atualizado com sucesso:', response);
      }),
      catchError(error => {
        console.error('Erro ao atualizar medicamento:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Desativar medicamento (soft delete)
   */
  deactivateMedication(id: string): Observable<ElderlyMedication> {
    console.log('=== FRONTEND: Desativando medicamento ===');
    console.log('Medicamento ID:', id);
    
    return this.http.patch<ElderlyMedication>(`${this.apiUrl}/caregiver/medications/${id}/deactivate`, {}, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Medicamento desativado com sucesso:', response);
      }),
      catchError(error => {
        console.error('Erro ao desativar medicamento:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Remover medicamento permanentemente
   */
  deleteMedication(id: string): Observable<void> {
    console.log('=== FRONTEND: Removendo medicamento ===');
    console.log('Medicamento ID:', id);
    
    return this.http.delete<void>(`${this.apiUrl}/caregiver/medications/${id}`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(() => {
        console.log('Medicamento removido com sucesso');
      }),
      catchError(error => {
        console.error('Erro ao remover medicamento:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Buscar idosos disponíveis para cadastro de medicamentos
   */
  getAvailableElderly(): Observable<AvailableElderly[]> {
    console.log('=== FRONTEND: Buscando idosos disponíveis ===');
    
    return this.http.get<AvailableElderly[]>(`${this.apiUrl}/caregiver/medications/available-elderly`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Idosos disponíveis recebidos:', response);
        console.log('Total de idosos:', response.length);
      }),
      catchError(error => {
        console.error('Erro ao buscar idosos disponíveis:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Buscar estatísticas de medicamentos do cuidador
   */
  getStats(): Observable<CaregiverMedicationStats> {
    console.log('=== FRONTEND: Buscando estatísticas do cuidador ===');
    
    return this.http.get<CaregiverMedicationStats>(`${this.apiUrl}/caregiver/medications/stats`, { 
      headers: this.getHeaders() 
    }).pipe(
      tap(response => {
        console.log('Estatísticas do cuidador recebidas:', response);
      }),
      catchError(error => {
        console.error('Erro ao buscar estatísticas do cuidador:', error);
        return throwError(() => error);
      })
    );
  }
}
