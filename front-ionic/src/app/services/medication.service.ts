import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export interface Medication {
  id?: string; // Opcional para criação, obrigatório após criado
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  startDate: string;
  endDate?: string;
  instructions?: string;
  elderlyId: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private apiUrl = 'http://localhost:3006';

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

  // Criar novo medicamento
  createMedication(medicationData: Medication): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/medications`, medicationData, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Medicamento criado:', response)),
        catchError(error => {
          console.error('Erro ao criar medicamento:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter todos os medicamentos do cuidador
  getAllMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(`${this.apiUrl}/medications`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Medicamentos obtidos:', response)),
        catchError(error => {
          console.error('Erro ao obter medicamentos:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter medicamentos de um idoso específico
  getMedicationsByElderly(elderlyId: string): Observable<Medication[]> {
    return this.http.get<Medication[]>(`${this.apiUrl}/medications/elderly/${elderlyId}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Medicamentos do idoso:', response)),
        catchError(error => {
          console.error('Erro ao obter medicamentos do idoso:', error);
          return throwError(() => error);
        })
      );
  }

  // Obter um medicamento específico
  getMedication(id: string): Observable<Medication> {
    return this.http.get<Medication>(`${this.apiUrl}/medications/${id}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Medicamento específico:', response)),
        catchError(error => {
          console.error('Erro ao obter medicamento:', error);
          return throwError(() => error);
        })
      );
  }

  // Atualizar medicamento
  updateMedication(id: string, medicationData: Partial<Medication>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/medications/${id}`, medicationData, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Medicamento atualizado:', response)),
        catchError(error => {
          console.error('Erro ao atualizar medicamento:', error);
          return throwError(() => error);
        })
      );
  }

  // Remover medicamento
  deleteMedication(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/medications/${id}`, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Medicamento removido:', response)),
        catchError(error => {
          console.error('Erro ao remover medicamento:', error);
          return throwError(() => error);
        })
      );
  }

  // Ativar/Desativar medicamento
  async toggleMedicationStatus(id: string): Promise<any> {
    const token = await this.authService.getToken();
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const response = await this.http.patch(`${this.apiUrl}/medications/${id}/toggle-active`, {}, { headers }).toPromise();
      return response;
    } catch (error) {
      console.error('Erro ao alterar status do medicamento:', error);
      throw error;
    }
  }

  async testAuth(): Promise<any> {
    // Para idosos, usar o token do elderly service
    const elderlyToken = localStorage.getItem('elderly_token');
    const token = elderlyToken || await this.authService.getToken();
    
    console.log('=== FRONTEND: TESTANDO AUTENTICAÇÃO ===');
    console.log('Token usado:', token ? 'Token encontrado' : 'Token não encontrado');
    console.log('É token de idoso:', !!elderlyToken);
    console.log('Token completo:', token);
    
    const headers = { Authorization: `Bearer ${token}` };

    try {
      console.log('Fazendo requisição para:', `${this.apiUrl}/medications/test-auth`);
      const response = await this.http.get<any>(`${this.apiUrl}/medications/test-auth`, { 
        headers
      }).toPromise();
      
      console.log('Resposta do teste de auth:', response);
      
      return response;
    } catch (error) {
      console.error('Erro no teste de autenticação:', error);
      throw error;
    }
  }

  async getMyMedications(): Promise<Medication[]> {
    // Primeiro testar a autenticação
    try {
      await this.testAuth();
    } catch (error) {
      console.error('Falha no teste de autenticação:', error);
    }

    // Para idosos, usar o token do elderly service
    const elderlyToken = localStorage.getItem('elderly_token');
    const token = elderlyToken || await this.authService.getToken();
    
    console.log('=== FRONTEND: BUSCANDO MEDICAMENTOS ===');
    console.log('Token usado:', token ? 'Token encontrado' : 'Token não encontrado');
    console.log('É token de idoso:', !!elderlyToken);
    
    const headers = { Authorization: `Bearer ${token}` };

    try {
      console.log('Fazendo requisição para:', `${this.apiUrl}/medications`);
      const response = await this.http.get<Medication[]>(`${this.apiUrl}/medications`, { 
        headers
      }).toPromise();
      
      console.log('Resposta recebida:', response);
      
      return response || [];
    } catch (error) {
      console.error('Erro detalhado ao buscar medicamentos:', error);
      throw error;
    }
  }
}
