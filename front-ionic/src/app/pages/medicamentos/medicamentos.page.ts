import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CaregiverMedicationService, CreateElderlyMedicationRequest, ElderlyMedication, AvailableElderly } from '../../services/caregiver-medication.service';
import { ElderlyService } from '../../services/elderly.service';
import { firstValueFrom } from 'rxjs';
import { addIcons } from 'ionicons';
import { 
  medicalOutline,
  addOutline,
  refreshOutline,
  arrowBackOutline,
  trashOutline,
  playOutline,
  pauseOutline,
  timeOutline,
  calendarOutline,
  informationCircleOutline,
  alarmOutline,
  closeCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [CaregiverMedicationService]
})
export class MedicamentosPage implements OnInit {
  medications: ElderlyMedication[] = [];
  elderlies: any[] = [];
  availableElderly: AvailableElderly[] = [];  // ← Nova lista com UUIDs corretos
  loading = false;
  showAddForm = false;
  scheduleTime = '';

  newMedication: CreateElderlyMedicationRequest = {
    elderlyUserId: '',
    name: '',
    dosage: '',
    frequency: '',
    schedules: [],
    startDate: '',
    endDate: '',
    instructions: '',
    notes: ''
  };

  constructor(
    private caregiverMedicationService: CaregiverMedicationService,
    private elderlyService: ElderlyService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) {
    // Adicionar ícones
    addIcons({
      'medical-outline': medicalOutline,
      'add-outline': addOutline,
      'refresh-outline': refreshOutline,
      'arrow-back-outline': arrowBackOutline,
      'trash-outline': trashOutline,
      'play-outline': playOutline,
      'pause-outline': pauseOutline,
      'time-outline': timeOutline,
      'calendar-outline': calendarOutline,
      'information-circle-outline': informationCircleOutline,
      'alarm-outline': alarmOutline,
      'close-circle-outline': closeCircleOutline
    });
  }

  ngOnInit() {
    console.log('=== MEDICAMENTOS PAGE: ngOnInit CHAMADO ===');
    this.debugAuth();
    this.loadData();
  }

  debugAuth() {
    console.log('=== DEBUG AUTENTICAÇÃO ===');
    const token = localStorage.getItem('auth_token');
    const user = localStorage.getItem('auth_user');
    
    console.log('Token existe:', !!token);
    console.log('Token:', token ? token.substring(0, 50) + '...' : 'null');
    console.log('User existe:', !!user);
    console.log('User:', user ? JSON.parse(user) : 'null');
    console.log('AuthService.isLoggedIn():', this.caregiverMedicationService['authService']?.isLoggedIn?.() || 'N/A');
  }

  async loadData() {
    console.log('=== MEDICAMENTOS PAGE: INICIANDO LOADDATA ===');
    this.loading = true;
    try {
      console.log('=== CARREGANDO DADOS ===');
      
      // Carregar idosos disponíveis com UUIDs corretos
      console.log('Carregando idosos disponíveis...');
      this.availableElderly = await firstValueFrom(this.caregiverMedicationService.getAvailableElderly());
      console.log('Idosos disponíveis carregados:', this.availableElderly.length);
      console.log('Lista de idosos disponíveis:', this.availableElderly);
      
      // Carregar idosos antigos (fallback)
      try {
        this.elderlies = await firstValueFrom(this.elderlyService.getElderlies());
        console.log('Idosos antigos carregados:', this.elderlies.length);
      } catch (elderlyError) {
        console.log('Elderlies antigos não carregados (OK, usando available-elderly)');
      }
      
      // Carregar medicamentos
      console.log('Carregando medicamentos...');
      this.medications = await firstValueFrom(this.caregiverMedicationService.getAllMedications());
      console.log('Medicamentos carregados:', this.medications.length);
      
      console.log('Dados carregados:', { 
        medications: this.medications.length, 
        availableElderly: this.availableElderly.length,
        elderlies: this.elderlies.length 
      });
    } catch (error) {
      console.error('Erro detalhado ao carregar dados:', error);
      
      // Tentar carregar pelo menos os idosos se medicamentos falharem
      try {
        console.log('Tentando carregar apenas idosos disponíveis...');
        this.availableElderly = await firstValueFrom(this.caregiverMedicationService.getAvailableElderly());
        console.log('Idosos disponíveis carregados no fallback:', this.availableElderly.length);
        this.showToast('Medicamentos não puderam ser carregados, mas você pode cadastrar novos', 'warning');
      } catch (elderlyError) {
        console.error('Erro ao carregar idosos disponíveis:', elderlyError);
        this.showToast('Erro ao conectar com o servidor. Verifique sua conexão.', 'danger');
      }
    } finally {
      this.loading = false;
    }
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) {
      this.resetForm();
    }
  }

  resetForm() {
    this.newMedication = {
      elderlyUserId: '',
      name: '',
      dosage: '',
      frequency: '',
      schedules: [],
      startDate: '',
      endDate: '',
      instructions: '',
      notes: ''
    } as CreateElderlyMedicationRequest;
    this.scheduleTime = '';
  }

  validateForm(): boolean {
    console.log('Validando formulário:', this.newMedication);
    
    if (!this.newMedication.name?.trim()) {
      this.showToast('Nome do medicamento é obrigatório', 'warning');
      return false;
    }
    
    if (!this.newMedication.dosage?.trim()) {
      this.showToast('Dosagem é obrigatória', 'warning');
      return false;
    }
    
    if (!this.newMedication.frequency?.trim()) {
      this.showToast('Frequência é obrigatória', 'warning');
      return false;
    }
    
    if (!this.newMedication.startDate?.trim()) {
      this.showToast('Data de início é obrigatória', 'warning');
      return false;
    }
    
    if (!this.newMedication.elderlyUserId?.trim()) {
      this.showToast('Selecione um idoso', 'warning');
      return false;
    }
    
    if (!this.newMedication.schedules || this.newMedication.schedules.length === 0) {
      this.showToast('Adicione pelo menos um horário', 'warning');
      return false;
    }
    
    return true;
  }

  async addMedication() {
    console.log('=== INICIANDO ADIÇÃO DE MEDICAMENTO ===');
    console.log('Dados atuais do formulário:', {
      name: this.newMedication.name,
      dosage: this.newMedication.dosage,
      frequency: this.newMedication.frequency,
      schedules: this.newMedication.schedules,
      startDate: this.newMedication.startDate,
      endDate: this.newMedication.endDate,
      elderlyUserId: this.newMedication.elderlyUserId,
      instructions: this.newMedication.instructions,
      notes: this.newMedication.notes
    });

    if (!this.validateForm()) {
      console.log('Validação do formulário falhou');
      return;
    }

    console.log('Validação passou, enviando para API...');
    this.loading = true;
    
    try {
      console.log('Chamando caregiverMedicationService.createMedication...');
      console.log('🔍 DEBUG DO CADASTRO:');
      console.log('- elderlyUserId selecionado:', this.newMedication.elderlyUserId);
      console.log('- Nome do medicamento:', this.newMedication.name);
      console.log('- Dados completos:', this.newMedication);
      
      const result = await firstValueFrom(this.caregiverMedicationService.createMedication(this.newMedication));
      console.log('✅ Resultado da criação:', result);
      console.log('📋 ID do medicamento criado:', result.id);
      console.log('📋 elderlyUserId no resultado:', result.elderlyUserId);
      console.log('📋 caregiverUserId no resultado:', result.caregiverUserId);
      
      this.showToast('Medicamento adicionado com sucesso!', 'success');
      this.resetForm();
      this.showAddForm = false;
      await this.loadData();
    } catch (error: any) {
      console.error('=== ERRO DETALHADO ===');
      console.error('Error object:', error);
      console.error('Error status:', error.status);
      console.error('Error statusText:', error.statusText);
      console.error('Error error:', error.error);
      console.error('Error message:', error.message);
      
      let errorMessage = 'Erro ao adicionar medicamento';
      
      if (error.status === 401) {
        errorMessage = 'Sessão expirada. Faça login novamente.';
      } else if (error.status === 403) {
        errorMessage = 'Você não tem permissão para esta ação.';
      } else if (error.status === 400) {
        errorMessage = error.error?.message || 'Dados inválidos.';
      } else if (error.error?.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      console.log('Mensagem de erro final:', errorMessage);
      this.showToast(errorMessage, 'danger');
    } finally {
      this.loading = false;
      console.log('=== FIM DA TENTATIVA DE ADIÇÃO ===');
    }
  }

  async deleteMedication(medication: ElderlyMedication) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: `Deseja realmente excluir o medicamento "${medication.name}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: async () => {
            try {
              await firstValueFrom(this.caregiverMedicationService.deleteMedication(medication.id));
              this.showToast('Medicamento excluído com sucesso!', 'success');
              this.loadData();
            } catch (error) {
              console.error('Erro ao excluir medicamento:', error);
              this.showToast('Erro ao excluir medicamento', 'danger');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  addSchedule() {
    if (this.scheduleTime && this.scheduleTime.trim()) {
      const timeValue = this.scheduleTime.trim();
      
      // Verificar se o horário já foi adicionado
      if (!this.newMedication.schedules.includes(timeValue)) {
        this.newMedication.schedules.push(timeValue);
        this.scheduleTime = '';
        console.log('Horário adicionado:', timeValue, 'Lista atual:', this.newMedication.schedules);
        this.showToast('Horário adicionado com sucesso!', 'success');
      } else {
        this.showToast('Este horário já foi adicionado', 'warning');
      }
    } else {
      this.showToast('Selecione um horário válido', 'warning');
    }
  }

  removeSchedule(index: number) {
    this.newMedication.schedules.splice(index, 1);
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

  getElderlyName(elderlyUserId: string): string {
    // Primeiro tentar na lista de idosos disponíveis (com UUIDs corretos)
    const availableElderly = this.availableElderly.find(e => e.id === elderlyUserId);
    if (availableElderly) {
      return availableElderly.name;
    }
    
    // Fallback para lista antiga
    const elderly = this.elderlies.find(e => e.userId === elderlyUserId);
    return elderly ? elderly.user?.name || elderly.name : 'Idoso não encontrado';
  }

  async toggleMedicationStatus(medication: ElderlyMedication) {
    try {
      if (medication.isActive) {
        await firstValueFrom(this.caregiverMedicationService.deactivateMedication(medication.id));
        this.showToast('Medicamento desativado com sucesso!', 'success');
      } else {
        await firstValueFrom(this.caregiverMedicationService.updateMedication(medication.id, { isActive: true }));
        this.showToast('Medicamento ativado com sucesso!', 'success');
      }
      this.loadData();
    } catch (error) {
      console.error('Erro ao alterar status:', error);
      this.showToast('Erro ao alterar status', 'danger');
    }
  }

  goBack() {
    this.router.navigate(['/home-cuidador']);
  }
}
