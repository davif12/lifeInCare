import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ElderlyMedicationService, ElderlyMedication } from '../../services/elderly-medication.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-meus-medicamentos',
  templateUrl: './meus-medicamentos.page.html',
  styleUrls: ['./meus-medicamentos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: [ElderlyMedicationService]
})
export class MeusMedicamentosPage implements OnInit {
  medications: ElderlyMedication[] = [];
  loading = false;

  constructor(
    private elderlyMedicationService: ElderlyMedicationService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.debugAuth();
    this.loadMyMedications();
  }

  debugAuth() {
    console.log('=== DEBUG AUTENTICAÇÃO IDOSO ===');
    const elderlyToken = localStorage.getItem('elderly_token');
    const authToken = localStorage.getItem('auth_token');
    const user = localStorage.getItem('auth_user');
    
    console.log('Elderly Token existe:', !!elderlyToken);
    console.log('Elderly Token completo:', elderlyToken);
    console.log('Auth Token existe:', !!authToken);
    console.log('Auth Token completo:', authToken);
    console.log('User existe:', !!user);
    console.log('User:', user ? JSON.parse(user) : 'null');
    
    // Verificar todos os itens do localStorage
    console.log('=== TODOS OS ITENS DO LOCALSTORAGE ===');
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
      }
    }
  }

  async loadMyMedications() {
    this.loading = true;
    try {
      console.log('=== PÁGINA: CARREGANDO MEDICAMENTOS DO IDOSO ===');
      console.log('Token do idoso no localStorage:', localStorage.getItem('elderly_token') ? 'Existe' : 'Não existe');
      
      this.medications = await firstValueFrom(this.elderlyMedicationService.getMyMedications());
      console.log('Medicamentos carregados com sucesso:', this.medications.length);
      
      if (this.medications.length === 0) {
        console.log('Nenhum medicamento encontrado para este idoso');
      } else {
        console.log('Lista de medicamentos:', this.medications);
      }
    } catch (error: any) {
      console.error('=== ERRO DETALHADO ===');
      console.error('Erro completo:', error);
      console.error('Status:', error.status);
      console.error('URL:', error.url);
      console.error('Mensagem:', error.message);
      console.error('Response body:', error.error);
      console.error('Response text:', error.error?.text || 'Não disponível');
      
      let errorMessage = 'Erro ao carregar medicamentos';
      if (error.status === 401) {
        errorMessage = 'Sessão expirada. Faça login novamente.';
        console.log('Redirecionando para login devido a erro 401');
        this.router.navigate(['/acesso-idoso']);
      } else if (error.status === 404) {
        errorMessage = 'Endpoint não encontrado. Verifique a configuração da API.';
      } else if (error.error?.message) {
        errorMessage = error.error.message;
      }
      
      this.showToast(errorMessage, 'danger');
    } finally {
      this.loading = false;
    }
  }

  async doRefresh(event: any) {
    await this.loadMyMedications();
    event.target.complete();
  }

  formatSchedules(schedules: string[]): string {
    if (!schedules || schedules.length === 0) {
      return 'Nenhum horário definido';
    }
    return schedules.join(', ');
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  getStatusColor(isActive?: boolean): string {
    return isActive === true ? 'success' : 'medium';
  }

  getStatusText(isActive?: boolean): string {
    return isActive === true ? 'Ativo' : 'Inativo';
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'top'
    });
    toast.present();
  }
}
