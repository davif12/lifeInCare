import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, LoadingController, AlertController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { 
  medkitOutline, 
  calendarOutline, 
  alertOutline, 
  timeOutline,
  exitOutline,
  checkmarkCircleOutline,
  refreshOutline,
  calendarClearOutline,
  personOutline,
  documentTextOutline,
  locationOutline,
  medicalOutline
} from 'ionicons/icons';
import { ElderlyService } from '../../services/elderly.service';
import { ElderlyMedicationService, TodaySchedule, MedicationSummary } from '../../services/elderly-medication.service';
import { IntegratedReminderService, IntegratedReminder } from '../../services/integrated-reminder.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home-idoso',
  templateUrl: './home-idoso.page.html',
  styleUrls: ['./home-idoso.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink
  ],
  providers: [ElderlyMedicationService, IntegratedReminderService]
})
export class HomeIdosoPage implements OnInit {
  nome: string = '';
  userData: any = null;
  loading = false;
  
  // Dados reais dos medicamentos
  todaySchedule: TodaySchedule[] = [];
  medicationSummary: MedicationSummary | null = null;
  
  // Lembretes integrados (medicamentos + lembretes + consultas)
  lembretes: any[] = [];
  integratedReminders: IntegratedReminder[] = [];

  constructor(
    private elderlyService: ElderlyService,
    private elderlyMedicationService: ElderlyMedicationService,
    private integratedReminderService: IntegratedReminderService,
    private toastController: ToastController
  ) {
    addIcons({
      'medicine-outline': medkitOutline,
      'calendar-outline': calendarOutline,
      'alert-outline': alertOutline,
      'time-outline': timeOutline,
      'exit-outline': exitOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'refresh-outline': refreshOutline,
      'calendar-clear-outline': calendarClearOutline,
      'person-outline': personOutline,
      'document-text-outline': documentTextOutline,
      'location-outline': locationOutline,
      'medical-outline': medicalOutline
    });
  }

  ngOnInit() {
    this.loadElderlyData();
    this.loadMedicationData();
    // loadIntegratedReminders será chamado após loadElderlyData
  }

  loadElderlyData() {
    // Obter dados do usuário idoso do localStorage ou do token
    const elderlyToken = this.elderlyService.getElderlyToken();
    if (elderlyToken) {
      // Decodificar o token para obter os dados do usuário
      try {
        const tokenPayload = JSON.parse(atob(elderlyToken.split('.')[1]));
        console.log('Token payload:', tokenPayload);
        this.nome = tokenPayload.username || 'Idoso';
        this.userData = {
          id: tokenPayload.sub,
          name: tokenPayload.username,
          role: tokenPayload.role
        };
        
        // Carregar lembretes integrados após ter os dados do usuário
        this.loadIntegratedReminders();
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
        this.nome = 'Idoso';
      }
    } else {
      console.log('Token não encontrado');
      this.nome = 'Idoso';
    }
  }

  async loadMedicationData() {
    if (!this.elderlyMedicationService.isAuthenticated()) {
      console.log('Idoso não autenticado, não carregando medicamentos');
      return;
    }

    this.loading = true;
    try {
      console.log('=== HOME-IDOSO: Carregando dados de medicamentos ===');
      
      // Carregar horários de hoje e resumo em paralelo
      const [todaySchedule, summary] = await Promise.all([
        firstValueFrom(this.elderlyMedicationService.getTodaySchedule()),
        firstValueFrom(this.elderlyMedicationService.getSummary())
      ]);

      this.todaySchedule = todaySchedule;
      this.medicationSummary = summary;

      // Converter horários de medicamentos em lembretes
      this.lembretes = this.todaySchedule.map(schedule => ({
        titulo: `${schedule.medicationName} - ${schedule.dosage}`,
        horario: schedule.time,
        concluido: false,
        tipo: 'medicamento',
        instructions: schedule.instructions
      }));

      console.log('Dados carregados com sucesso:');
      console.log('- Horários de hoje:', this.todaySchedule.length);
      console.log('- Resumo:', this.medicationSummary);
      console.log('- Lembretes gerados:', this.lembretes.length);

    } catch (error) {
      console.error('Erro ao carregar dados de medicamentos:', error);
      // Em caso de erro, manter lembretes vazios ou mostrar mensagem
      this.lembretes = [];
    } finally {
      this.loading = false;
    }
  }

  async loadIntegratedReminders() {
    if (!this.userData?.id) {
      console.log('ID do usuário não disponível para carregar lembretes');
      return;
    }

    try {
      console.log('=== HOME-IDOSO: Carregando lembretes integrados ===');
      
      this.integratedReminderService.getIntegratedReminders(this.userData.id).subscribe({
        next: (reminders) => {
          this.integratedReminders = reminders;
          console.log('Lembretes integrados carregados:', reminders.length);
        },
        error: (error) => {
          console.error('Erro ao carregar lembretes integrados:', error);
          this.integratedReminders = [];
        }
      });
    } catch (error) {
      console.error('Erro ao carregar lembretes integrados:', error);
      this.integratedReminders = [];
    }
  }

  async doRefresh(event: any) {
    await Promise.all([
      this.loadMedicationData(),
      this.loadIntegratedReminders()
    ]);
    event.target.complete();
  }

  // Adicionar método para marcar medicamentos (lista antiga)
  async markMedicationAsCompleted(medication: any) {
    // Adiciona a propriedade para iniciar a animação
    medication.completing = true;

    // Aguarda a animação antes de remover da lista
    setTimeout(() => {
      this.lembretes = this.lembretes.filter(item => item !== medication);
      this.presentToast(`"${medication.titulo}" concluído!`, 'success');
    }, 500); // Tempo da animação

    // TODO: Implementar a chamada de API para marcar o medicamento como concluído no backend
  }

  // Método para marcar lembretes integrados como concluídos
  async markAsCompleted(reminder: any) {
    if (!reminder.actionable) return;

    const originalReminders = [...this.integratedReminders];
    
    // Animação e remoção otimista
    reminder.completing = true;
    setTimeout(() => {
      this.integratedReminders = this.integratedReminders.filter(item => item.id !== reminder.id);
    }, 500);

    try {
      await firstValueFrom(this.integratedReminderService.markAsCompleted(reminder));
      this.presentToast(`"${reminder.title}" concluído!`, 'success');
    } catch (error) {
      console.error('Erro ao marcar como concluído, revertendo:', error);
      // Reverte a UI em caso de erro
      this.integratedReminders = originalReminders;
      this.presentToast('Falha ao concluir. Tente novamente.', 'danger');
    }
  }

  // Adicionar método auxiliar para exibir Toasts
  async presentToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }

  // Métodos auxiliares para o template
  getFormattedDateTime(date: Date): string {
    return this.integratedReminderService.formatDateTime(date);
  }

  getIconForType(type: string): string {
    return this.integratedReminderService.getIconForType(type);
  }

  getColorForUrgency(date: Date): string {
    return this.integratedReminderService.getColorForUrgency(date);
  }

  sair() {
    console.log('Saindo...');
    this.elderlyService.elderlyLogout();
    // Redirecionar para página de entrada ou login
    window.location.href = '/entrada';
  }
}
