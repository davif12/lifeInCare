import { Injectable } from '@angular/core';
import { Observable, combineLatest, map, catchError, of } from 'rxjs';
import { ReminderService, Reminder, ReminderStatus } from './reminder.service';
import { ConsultationService, Consultation, ConsultationStatus } from './consultation.service';

export interface IntegratedReminder {
  id: string;
  title: string;
  description: string;
  type: 'reminder' | 'consultation' | 'medication';
  nextOccurrence: Date;
  status: 'active' | 'completed' | 'cancelled';
  elderlyUser?: any;
  originalData?: any; // Dados originais do lembrete ou consulta
  actionable: boolean; // Se pode ser marcado como concluído
  completing?: boolean; // Para animação de conclusão
}

@Injectable({
  providedIn: 'root'
})
export class IntegratedReminderService {

  constructor(
    private reminderService: ReminderService,
    private consultationService: ConsultationService
  ) { }

  /**
   * Obter todos os lembretes integrados (lembretes + consultas) ordenados por próxima ocorrência
   */
  getIntegratedReminders(elderlyUserId?: string): Observable<IntegratedReminder[]> {
    const reminders$ = this.reminderService.getRemindersSortedByNextOccurrence({
      status: ReminderStatus.ACTIVE,
      elderlyUserId,
      limit: 100
    }).pipe(
      map(response => response.data),
      catchError(error => {
        console.error('Erro ao carregar lembretes:', error);
        return of([]);
      })
    );

    // Usar getMyConsultations() que existe no ConsultationService
    const consultations$ = this.consultationService.getMyConsultations().pipe(
      catchError(error => {
        console.error('Erro ao carregar consultas:', error);
        return of([]);
      })
    );

    return combineLatest([reminders$, consultations$]).pipe(
      map(([reminders, consultations]) => {
        const integratedReminders: IntegratedReminder[] = [];

        // Converter lembretes
        reminders.forEach((reminder: Reminder) => {
          if (reminder.nextOccurrence) {
            integratedReminders.push({
              id: reminder.id!,
              title: reminder.title,
              description: reminder.description,
              type: 'reminder',
              nextOccurrence: new Date(reminder.nextOccurrence),
              status: this.mapReminderStatus(reminder.status),
              elderlyUser: reminder.elderlyUser,
              originalData: reminder,
              actionable: true
            });
          }
        });

        // Converter consultas próximas (próximos 30 dias)
        const now = new Date();
        const thirtyDaysFromNow = new Date();
        thirtyDaysFromNow.setDate(now.getDate() + 30);

        if (consultations) {
          consultations.forEach((consultation: Consultation) => {
            const consultationDate = new Date(consultation.scheduledDateTime);
            
            // Incluir apenas consultas futuras nos próximos 30 dias
            // Se elderlyUserId foi especificado, filtrar por ele
            const shouldInclude = consultationDate > now && 
                                consultationDate <= thirtyDaysFromNow &&
                                (!elderlyUserId || consultation.elderlyUserId === elderlyUserId);
            
            if (shouldInclude) {
              integratedReminders.push({
                id: consultation.id!,
                title: `Consulta: ${consultation.specialty}`,
                description: `Dr. ${consultation.doctorName} - ${consultation.location}`,
                type: 'consultation',
                nextOccurrence: consultationDate,
                status: this.mapConsultationStatus(consultation.status),
                elderlyUser: consultation.elderlyUser,
                originalData: consultation,
                actionable: consultation.status === ConsultationStatus.SCHEDULED
              });
            }
          });
        }

        // Ordenar por próxima ocorrência
        return integratedReminders.sort((a, b) => 
          a.nextOccurrence.getTime() - b.nextOccurrence.getTime()
        );
      })
    );
  }

  /**
   * Marcar lembrete como concluído
   */
  markReminderAsCompleted(reminderId: string): Observable<any> {
    return this.reminderService.markAsCompleted(reminderId);
  }

  /**
   * Marcar consulta como concluída
   */
  markConsultationAsCompleted(consultationId: string): Observable<any> {
    // Usar o método correto do ConsultationService
    return this.consultationService.updateConsultationStatus(consultationId, ConsultationStatus.COMPLETED);
  }

  /**
   * Marcar item integrado como concluído
   */
  markAsCompleted(item: IntegratedReminder): Observable<any> {
    if (item.type === 'reminder') {
      return this.markReminderAsCompleted(item.id);
    } else if (item.type === 'consultation') {
      return this.markConsultationAsCompleted(item.id);
    }
    
    return of({ message: 'Tipo não suportado' });
  }

  private mapReminderStatus(status?: ReminderStatus): 'active' | 'completed' | 'cancelled' {
    switch (status) {
      case ReminderStatus.COMPLETED: return 'completed';
      case ReminderStatus.CANCELLED: return 'cancelled';
      default: return 'active';
    }
  }

  private mapConsultationStatus(status?: ConsultationStatus): 'active' | 'completed' | 'cancelled' {
    switch (status) {
      case ConsultationStatus.COMPLETED: return 'completed';
      case ConsultationStatus.CANCELLED: return 'cancelled';
      default: return 'active';
    }
  }

  /**
   * Formatar data/hora para exibição
   */
  formatDateTime(date: Date): string {
    const now = new Date();
    const diffInHours = (date.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.round(diffInHours * 60);
      return diffInMinutes <= 0 ? 'Agora' : `Em ${diffInMinutes} min`;
    } else if (diffInHours < 24) {
      return `Em ${Math.round(diffInHours)} horas`;
    } else {
      const diffInDays = Math.round(diffInHours / 24);
      if (diffInDays === 1) {
        return 'Amanhã';
      } else if (diffInDays < 7) {
        return `Em ${diffInDays} dias`;
      } else {
        return date.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }
    }
  }

  /**
   * Obter ícone baseado no tipo
   */
  getIconForType(type: string): string {
    switch (type) {
      case 'reminder': return 'notifications-outline';
      case 'consultation': return 'calendar-outline';
      case 'medication': return 'medical-outline';
      default: return 'alert-outline';
    }
  }

  /**
   * Obter cor baseada na urgência
   */
  getColorForUrgency(nextOccurrence: Date): string {
    const now = new Date();
    const diffInHours = (nextOccurrence.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours <= 1) {
      return 'danger'; // Vermelho - muito urgente
    } else if (diffInHours <= 6) {
      return 'warning'; // Amarelo - urgente
    } else if (diffInHours <= 24) {
      return 'primary'; // Azul - hoje
    } else {
      return 'medium'; // Cinza - futuro
    }
  }
}
