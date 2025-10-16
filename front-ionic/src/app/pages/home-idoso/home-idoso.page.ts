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
  medicalOutline,
  alarmOutline
} from 'ionicons/icons';
import { ElderlyService } from '../../services/elderly.service';
import { ElderlyMedicationService, TodaySchedule, MedicationSummary } from '../../services/elderly-medication.service';
import { IntegratedReminderService, IntegratedReminder } from '../../services/integrated-reminder.service';
import { firstValueFrom } from 'rxjs';

// Interface para itens da timeline unificada
export interface TimelineItem {
  id: string;
  type: 'medication' | 'consultation' | 'reminder';
  title: string;
  description: string;
  time: string;
  completed: boolean;
  actionable: boolean;
  urgency: 'low' | 'medium' | 'high';
  originalItem: any;
}

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
  
  // Cache da timeline para evitar loops infinitos
  private _timelineCache: TimelineItem[] = [];
  private _cacheValid = false;
  
  // Getter para timeline (usado no template)
  get timelineItems(): TimelineItem[] {
    if (!this._cacheValid) {
      this._timelineCache = this.buildUnifiedTimeline();
      this._cacheValid = true;
    }
    return this._timelineCache;
  }
  
  // Método para invalidar cache
  private invalidateTimelineCache(): void {
    this._cacheValid = false;
  }

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
      'medical-outline': medicalOutline,
      'alarm-outline': alarmOutline
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
        this.loading = true;
        // Dados já obtidos do token, não precisa fazer nova requisição
        this.loading = false;
        this.invalidateTimelineCache(); // Invalidar cache quando dados mudarem
        // Carregar lembretes integrados após carregar dados do idoso
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
      
      this.invalidateTimelineCache(); // Invalidar cache quando dados mudarem

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

  // Função para determinar a urgência da próxima dose
  getNextDoseUrgencyClass(): string {
    if (!this.medicationSummary?.nextDose?.time) {
      return 'elderly-next-dose-normal';
    }

    const now = new Date();
    const [hours, minutes] = this.medicationSummary.nextDose.time.split(':').map(Number);
    const nextDoseTime = new Date();
    nextDoseTime.setHours(hours, minutes, 0, 0);

    // Se a dose é para amanhã, ajustar a data
    if (nextDoseTime < now) {
      nextDoseTime.setDate(nextDoseTime.getDate() + 1);
    }

    const timeDiff = nextDoseTime.getTime() - now.getTime();
    const minutesDiff = Math.floor(timeDiff / (1000 * 60));

    // Dose atrasada (tempo negativo ou muito próximo)
    if (minutesDiff < 0) {
      return 'elderly-next-dose-overdue';
    }
    // Dose urgente (menos de 30 minutos)
    else if (minutesDiff <= 30) {
      return 'elderly-next-dose-urgent';
    }
    // Dose normal
    else {
      return 'elderly-next-dose-normal';
    }
  }

  // Timeline Unificada - Consolida todos os itens em uma única lista cronológica (método privado)
  private buildUnifiedTimeline(): TimelineItem[] {
    const timelineItems: TimelineItem[] = [];
    
    // Guards de segurança
    if (!this.lembretes || !Array.isArray(this.lembretes)) {
      console.warn('Lembretes não disponíveis para timeline');
      return [];
    }
    
    if (!this.integratedReminders || !Array.isArray(this.integratedReminders)) {
      console.warn('Lembretes integrados não disponíveis para timeline');
      return [];
    }
    
    const now = new Date();
    const today = now.toDateString();

    // Adicionar medicamentos de hoje (exceto a próxima dose que já está em destaque)
    this.lembretes.forEach(lembrete => {
      if (!this.isNextDose(lembrete)) {
        timelineItems.push({
          id: `med-${lembrete.id}`,
          type: 'medication',
          title: lembrete.titulo,
          description: lembrete.instructions || 'Tomar conforme prescrito',
          time: lembrete.horario,
          completed: lembrete.concluido,
          actionable: true,
          urgency: this.calculateUrgency(lembrete.horario),
          originalItem: lembrete
        });
      }
    });

    // Adicionar lembretes e consultas integrados (apenas de hoje)
    this.integratedReminders.forEach(reminder => {
      const reminderDate = new Date(reminder.nextOccurrence);
      if (reminderDate.toDateString() === today) {
        timelineItems.push({
          id: `reminder-${reminder.id}`,
          type: reminder.type as 'medication' | 'consultation' | 'reminder',
          title: reminder.title,
          description: reminder.description,
          time: this.formatTime(reminderDate),
          completed: reminder.status === 'completed',
          actionable: reminder.actionable,
          urgency: this.calculateUrgency(this.formatTime(reminderDate)),
          originalItem: reminder
        });
      }
    });

    // Ordenar por horário
    return timelineItems.sort((a, b) => {
      const timeA = this.parseTime(a.time);
      const timeB = this.parseTime(b.time);
      return timeA.getTime() - timeB.getTime();
    });
  }

  // Verificar se um medicamento é a próxima dose em destaque
  private isNextDose(lembrete: any): boolean {
    if (!lembrete || !this.medicationSummary?.nextDose) return false;
    return lembrete.titulo === this.medicationSummary.nextDose.medicationName &&
           lembrete.horario === this.medicationSummary.nextDose.time;
  }

  // Calcular urgência baseada no horário
  private calculateUrgency(timeStr: string): 'low' | 'medium' | 'high' {
    const now = new Date();
    const itemTime = this.parseTime(timeStr);
    const diffMinutes = Math.floor((itemTime.getTime() - now.getTime()) / (1000 * 60));

    if (diffMinutes < 0) return 'high'; // Atrasado
    if (diffMinutes <= 30) return 'high'; // Muito próximo
    if (diffMinutes <= 120) return 'medium'; // Próximo (2h)
    return 'low'; // Distante
  }

  // Converter string de tempo para Date
  private parseTime(timeStr: string): Date {
    if (!timeStr || typeof timeStr !== 'string') {
      console.warn('Tempo inválido:', timeStr);
      return new Date();
    }
    
    const parts = timeStr.split(':');
    if (parts.length !== 2) {
      console.warn('Formato de tempo inválido:', timeStr);
      return new Date();
    }
    
    const [hours, minutes] = parts.map(Number);
    if (isNaN(hours) || isNaN(minutes)) {
      console.warn('Valores de tempo inválidos:', timeStr);
      return new Date();
    }
    
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  // Formatar Date para string de tempo
  private formatTime(date: Date): string {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  // Funções auxiliares para o template da timeline
  getTimelineItemClass(item: TimelineItem): string {
    const classes = [`timeline-${item.type}`];
    if (item.completed) classes.push('completed');
    if (item.urgency === 'high') classes.push('urgent');
    return classes.join(' ');
  }

  getTimelineIcon(type: string): string {
    switch (type) {
      case 'medication': return 'medical-outline';
      case 'consultation': return 'calendar-outline';
      case 'reminder': return 'alarm-outline';
      default: return 'time-outline';
    }
  }

  getUrgencyColor(item: TimelineItem): string {
    if (item.completed) return 'success';
    switch (item.urgency) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      default: return 'primary';
    }
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'medication': return 'Medicamento';
      case 'consultation': return 'Consulta';
      case 'reminder': return 'Lembrete';
      default: return 'Item';
    }
  }

  // Marcar item da timeline como concluído
  async markTimelineItemCompleted(item: TimelineItem) {
    if (item.type === 'medication') {
      await this.markMedicationAsCompleted(item.originalItem);
    } else {
      await this.markAsCompleted(item.originalItem);
    }
  }

  sair() {
    console.log('Saindo...');
    this.elderlyService.elderlyLogout();
    // Redirecionar para página de entrada ou login
    window.location.href = '/entrada';
  }
}
