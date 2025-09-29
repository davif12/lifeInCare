import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { ElderlyMedicationService, ElderlyMedication } from '../../services/elderly-medication.service';
import { firstValueFrom } from 'rxjs';
import { addIcons } from 'ionicons';
import { 
  medicalOutline, 
  timeOutline, 
  calendarOutline, 
  checkmarkCircleOutline,
  alertCircleOutline,
  refreshOutline,
  informationCircleOutline,
  notificationsOutline,
  bugOutline
} from 'ionicons/icons';

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
    private alertController: AlertController,
    private router: Router
  ) {
    addIcons({
      'medical-outline': medicalOutline,
      'time-outline': timeOutline,
      'calendar-outline': calendarOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'alert-circle-outline': alertCircleOutline,
      'refresh-outline': refreshOutline,
      'information-circle-outline': informationCircleOutline,
      'notifications-outline': notificationsOutline,
      'bug-outline': bugOutline
    });
  }

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

  async testDatabaseConnection() {
    console.log('🔧 SOLUÇÃO DEFINITIVA - TESTE COMPLETO');
    console.log('🎯 MEDICAMENTOS NO BANCO: e8d93e10-6244-4275-8a2e-9efc');
    
    try {
      // Chamar o endpoint de DEBUG que vai mostrar TUDO
      console.log('🚀 Chamando endpoint de DEBUG...');
      const debugResult = await firstValueFrom(this.elderlyMedicationService.getDebugMedications());
      
      console.log('=== 🎯 RESULTADO COMPLETO DO DEBUG ===');
      console.log('👤 Informações do usuário:', debugResult.userInfo);
      console.log('🔍 Busca normal:', debugResult.searchResults);
      console.log('📊 Todos os medicamentos:', debugResult.allMedicationsInDatabase);
      console.log('💪 Busca forçada:', debugResult.forcedSearch);
      
      // Verificar se a busca forçada funcionou
      if (debugResult.forcedSearch && debugResult.forcedSearch.length > 0) {
        console.log('✅ SUCESSO! Busca forçada encontrou medicamentos!');
        console.log('📋 Medicamentos encontrados:', debugResult.forcedSearch);
        
        // Atualizar a lista local com os medicamentos encontrados
        this.medications = debugResult.forcedSearch;
        this.showToast(`✅ SUCESSO! ${debugResult.forcedSearch.length} medicamentos encontrados!`, 'success');
      } else {
        console.log('❌ Nem a busca forçada funcionou');
        this.showToast('❌ Problema no backend - verifique os logs', 'danger');
      }
      
      // Mostrar comparação de IDs
      const tokenId = debugResult.userInfo.elderlyUserId;
      const expectedId = 'e8d93e10-6244-4275-8a2e-9efc';
      
      console.log('🆔 COMPARAÇÃO DE IDs:');
      console.log(`- Token: "${tokenId}"`);
      console.log(`- Esperado: "${expectedId}"`);
      console.log(`- Coincidem: ${tokenId === expectedId}`);
      
    } catch (error) {
      console.error('❌ Erro no teste definitivo:', error);
      this.showToast('❌ Erro no teste - verifique o console', 'danger');
    }
  }

  async loadMyMedications() {
    this.loading = true;
    try {
      console.log('=== MEUS-MEDICAMENTOS: CARREGANDO MEDICAMENTOS DO IDOSO ===');
      
      // Debug detalhado de autenticação
      const elderlyToken = localStorage.getItem('elderly_token');
      const authToken = localStorage.getItem('auth_token');
      const authUser = localStorage.getItem('auth_user');
      
      console.log('🔍 DEBUG DE AUTENTICAÇÃO:');
      console.log('- elderly_token existe:', !!elderlyToken);
      console.log('- auth_token existe:', !!authToken);
      console.log('- auth_user existe:', !!authUser);
      
      if (elderlyToken) {
        try {
          // Decodificar o token para ver o conteúdo
          const tokenParts = elderlyToken.split('.');
          if (tokenParts.length === 3) {
            const payload = JSON.parse(atob(tokenParts[1]));
            console.log('📋 PAYLOAD DO TOKEN DO IDOSO:', payload);
            console.log('- userId/sub:', payload.sub || payload.userId);
            console.log('- username:', payload.username);
            console.log('- role:', payload.role);
            console.log('- exp:', new Date(payload.exp * 1000));
          }
        } catch (decodeError) {
          console.error('Erro ao decodificar token:', decodeError);
        }
      }
      
      if (authUser) {
        try {
          const user = JSON.parse(authUser);
          console.log('👤 DADOS DO USUÁRIO NO LOCALSTORAGE:', user);
        } catch (parseError) {
          console.error('Erro ao parsear auth_user:', parseError);
        }
      }
      
      // Usar o endpoint específico para idosos que sabemos que funciona
      console.log('🔄 Carregando medicamentos via /elderly/medications/my-medications...');
      this.medications = await firstValueFrom(this.elderlyMedicationService.getMyMedications());
      console.log('✅ Medicamentos carregados:', this.medications.length);
      console.log('📋 Dados dos medicamentos:', this.medications);
      
      if (this.medications.length === 0) {
        console.log('❌ Nenhum medicamento encontrado para este idoso');
        console.log('🔍 Verificando se há medicamentos cadastrados por cuidadores...');
        
        // Tentar buscar todos os medicamentos para debug
        try {
          console.log('🔄 Tentando buscar dashboard para mais informações...');
          const dashboard = await firstValueFrom(this.elderlyMedicationService.getDashboard());
          console.log('📊 Dashboard recebido:', dashboard);
        } catch (dashboardError) {
          console.error('Erro ao buscar dashboard:', dashboardError);
        }
        
        this.showToast('Nenhum medicamento encontrado. Peça ao seu cuidador para cadastrar seus medicamentos.', 'warning');
      } else {
        console.log('✅ Medicamentos encontrados:', this.medications.length);
        this.showToast(`${this.medications.length} medicamento(s) carregado(s) com sucesso!`, 'success');
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

  async markAsTaken(medication: ElderlyMedication) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `Marcar "${medication.name}" como tomado?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: async () => {
            try {
              await firstValueFrom(this.elderlyMedicationService.markAsTaken(medication.id));
              await this.showToast('Medicamento marcado como tomado!', 'success');
              await this.loadMyMedications(); // Recarregar lista
            } catch (error) {
              console.error('Erro ao marcar medicamento como tomado:', error);
              await this.showToast('Erro ao marcar medicamento como tomado', 'danger');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async showMedicationDetails(medication: ElderlyMedication) {
    const alert = await this.alertController.create({
      header: medication.name,
      message: `
        <strong>Dosagem:</strong> ${medication.dosage}<br>
        <strong>Horários:</strong> ${this.formatSchedules(medication.schedules)}<br>
        <strong>Instruções:</strong> ${medication.instructions || 'Nenhuma instrução especial'}<br>
        <strong>Status:</strong> ${this.getStatusText(medication.isActive)}
      `,
      buttons: ['Fechar']
    });
    await alert.present();
  }

  getNextDose(schedules: string[]): string {
    if (!schedules || schedules.length === 0) {
      return 'Nenhum horário definido';
    }

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const nextSchedule = schedules
      .map(time => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
      })
      .sort((a, b) => a - b)
      .find(time => time > currentTime);

    if (nextSchedule) {
      const hours = Math.floor(nextSchedule / 60);
      const minutes = nextSchedule % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } else {
      // Próxima dose é amanhã no primeiro horário
      const firstSchedule = schedules
        .map(time => {
          const [hours, minutes] = time.split(':').map(Number);
          return hours * 60 + minutes;
        })
        .sort((a, b) => a - b)[0];
      
      const hours = Math.floor(firstSchedule / 60);
      const minutes = firstSchedule % 60;
      return `Amanhã às ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
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
