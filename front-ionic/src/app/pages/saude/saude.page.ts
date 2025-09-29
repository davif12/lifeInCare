import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { 
  medkitOutline, 
  calendarOutline, 
  notificationsOutline,
  timeOutline,
  arrowBackOutline,
  medicalOutline,
  heartOutline,
  checkmarkCircleOutline,
  alarmOutline,
  informationCircleOutline,
  documentTextOutline
} from 'ionicons/icons';
import { ElderlyMedicationService, ElderlyMedication } from '../../services/elderly-medication.service';
import { ElderlyService } from '../../services/elderly.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-saude',
  templateUrl: './saude.page.html',
  styleUrls: ['./saude.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [ElderlyMedicationService]
})
export class SaudePage implements OnInit {
  segmento: string = 'remedios';
  loading = false;
  
  // Dados reais do backend
  medicamentos: ElderlyMedication[] = [];
  
  // Dados mock para consultas e lembretes (podem ser implementados depois)
  remedios = [
    { nome: 'Losartana', horario: '08:00', dosagem: '50mg', observacao: 'Tomar com água' },
    { nome: 'AAS', horario: '12:00', dosagem: '100mg', observacao: 'Tomar após o almoço' },
    { nome: 'Metformina', horario: '20:00', dosagem: '850mg', observacao: 'Tomar após o jantar' }
  ];
  
  consultas = [
    { especialidade: 'Cardiologia', data: '15/05/2025', horario: '09:30', local: 'Hospital Central' },
    { especialidade: 'Endocrinologia', data: '22/05/2025', horario: '14:00', local: 'Clínica São Lucas' }
  ];
  
  lembretes = [
    { titulo: 'Medir pressão', horario: '10:00', recorrencia: 'Diário' },
    { titulo: 'Fazer exercícios leves', horario: '16:00', recorrencia: 'Segunda, Quarta e Sexta' },
    { titulo: 'Beber água', horario: 'A cada 2h', recorrencia: 'Diário' }
  ];

  constructor(
    private elderlyMedicationService: ElderlyMedicationService,
    public elderlyService: ElderlyService,
    private toastController: ToastController
  ) {
    addIcons({
      'medicine-outline': medkitOutline,
      'calendar-outline': calendarOutline,
      'notifications-outline': notificationsOutline,
      'time-outline': timeOutline,
      'arrow-back-outline': arrowBackOutline,
      'pill-outline': medicalOutline,
      'heart-outline': heartOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'medical-outline': medicalOutline,
      'alarm-outline': alarmOutline,
      'information-circle-outline': informationCircleOutline,
      'document-text-outline': documentTextOutline
    });
  }

  ngOnInit() {
    this.loadHealthData();
  }

  async loadHealthData() {
    this.loading = true;
    try {
      console.log('=== CARREGANDO DADOS DE SAÚDE DO IDOSO ===');
      
      // Debug de autenticação
      const elderlyToken = localStorage.getItem('elderly_token');
      const authToken = localStorage.getItem('auth_token');
      console.log('Elderly Token existe:', !!elderlyToken);
      console.log('Auth Token existe:', !!authToken);
      
      if (!elderlyToken && !authToken) {
        console.error('Nenhum token encontrado!');
        this.showToast('Você precisa fazer login primeiro', 'danger');
        return;
      }
      
      // Carregar medicamentos reais do backend via endpoint específico para idosos
      console.log('🔄 Carregando medicamentos via /elderly/medications/my-medications...');
      this.medicamentos = await firstValueFrom(this.elderlyMedicationService.getMyMedications());
      console.log('✅ Medicamentos carregados:', this.medicamentos.length);
      console.log('📋 Dados dos medicamentos:', this.medicamentos);
      
      if (this.medicamentos.length === 0) {
        console.log('Nenhum medicamento encontrado');
        this.showToast('Nenhum medicamento encontrado. Peça ao seu cuidador para cadastrar seus medicamentos.', 'warning');
      } else {
        console.log('Medicamentos encontrados:', this.medicamentos);
      }
      
    } catch (error) {
      console.error('Erro detalhado ao carregar dados de saúde:', error);
      console.error('Error status:', (error as any)?.status);
      console.error('Error message:', (error as any)?.message);
      console.error('Error error:', (error as any)?.error);
      
      let errorMessage = 'Erro ao carregar dados de saúde';
      if ((error as any)?.status === 401) {
        errorMessage = 'Sessão expirada. Faça login novamente.';
      } else if ((error as any)?.status === 404) {
        errorMessage = 'Serviço não encontrado. Verifique se o backend está rodando.';
      }
      
      this.showToast(errorMessage, 'danger');
    } finally {
      this.loading = false;
    }
  }

  mudarSegmento(event: any) {
    this.segmento = event.detail.value;
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }

  formatSchedules(schedules: string[]): string {
    if (!schedules || schedules.length === 0) {
      return 'Não definido';
    }
    return schedules.join(', ');
  }

  getStatusColor(isActive: boolean | undefined): string {
    return isActive === true ? 'success' : 'medium';
  }

  getStatusText(isActive: boolean | undefined): string {
    return isActive === true ? 'Ativo' : 'Inativo';
  }

  debugTokens() {
    console.log('=== DEBUG COMPLETO DE TOKENS ===');
    const elderlyToken = localStorage.getItem('elderly_token');
    const authToken = localStorage.getItem('auth_token');
    const user = localStorage.getItem('auth_user');
    
    console.log('LocalStorage Contents:');
    console.log('- elderly_token:', elderlyToken);
    console.log('- auth_token:', authToken);
    console.log('- auth_user:', user);
    
    console.log('ElderlyService methods:');
    console.log('- getElderlyToken():', this.elderlyService.getElderlyToken());
    console.log('- isElderlyLoggedIn():', this.elderlyService.isElderlyLoggedIn());
    
    console.log('Medicamentos atuais:', this.medicamentos);
    console.log('Primeiro medicamento:', this.medicamentos[0]);
    
    if (!elderlyToken && !authToken) {
      this.showToast('❌ Nenhum token encontrado! Faça login primeiro.', 'danger');
    } else {
      this.showToast('✅ Tokens encontrados no localStorage', 'success');
    }
  }
}
