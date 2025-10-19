import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, LoadingController, AlertController } from '@ionic/angular';
import { ConsultationService, ConsultationType, ConsultationStatus } from '../../services/consultation.service';
import { ReminderService, ReminderType, ReminderFrequency } from '../../services/reminder.service';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.page.html',
  styleUrls: ['./consultation-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class ConsultationFormPage implements OnInit {
  form: FormGroup;
  isEditMode = false;
  consultationId: string | null = null;
  elderlyId: string | null = null;
  pageTitle = 'Agendar Consulta';
  isSubmitting = false;
  minDateTime: string;

  // Enums para o template
  consultationTypes = [
    { value: ConsultationType.ROUTINE, label: 'Rotina' },
    { value: ConsultationType.EMERGENCY, label: 'Emergência' },
    { value: ConsultationType.FOLLOW_UP, label: 'Retorno' },
    { value: ConsultationType.SPECIALIST, label: 'Especialista' }
  ];

  consultationStatuses = [
    { value: ConsultationStatus.SCHEDULED, label: 'Agendada' },
    { value: ConsultationStatus.COMPLETED, label: 'Concluída' },
    { value: ConsultationStatus.CANCELLED, label: 'Cancelada' },
    { value: ConsultationStatus.RESCHEDULED, label: 'Reagendada' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private consultationService: ConsultationService,
    private reminderService: ReminderService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    // Adicionar ícones
    addIcons({
      'information-circle-outline': informationCircleOutline
    });

    // Definir data mínima (15 minutos a partir de agora)
    const now = new Date();
    now.setMinutes(now.getMinutes() + 15);
    this.minDateTime = now.toISOString();

    this.form = this.fb.group({
      type: [ConsultationType.ROUTINE, Validators.required],
      specialty: ['', [Validators.required, Validators.minLength(3)]],
      doctorName: ['', [Validators.required, Validators.minLength(3)]],
      scheduledDateTime: ['', [Validators.required, this.futureDateValidator]],
      location: ['', [Validators.required, Validators.minLength(3)]],
      reason: ['', [Validators.required, Validators.minLength(10)]],
      notes: [''],
      // Campos apenas para edição
      status: [ConsultationStatus.SCHEDULED],
      result: [''],
      prescriptions: [''],
      nextAppointment: [''],
      // Campos de UI apenas
      enableReminder: [false],
      reminderTime: [30]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.consultationId = params['id'];
      this.elderlyId = params['elderlyId']; // Apenas captura o ID
      
      console.log('ConsultationForm - Parâmetros recebidos:', params);
      console.log('ConsultationForm - elderlyId:', this.elderlyId);
      console.log('ConsultationForm - consultationId:', this.consultationId);

      if (this.consultationId) {
        this.isEditMode = true;
        this.pageTitle = 'Editar Consulta';
        this.loadConsultationData();
      }
    });
  }

  async loadConsultationData() {
    const loading = await this.loadingController.create({ 
      message: 'Carregando dados da consulta...' 
    });
    await loading.present();

    this.consultationService.getConsultation(this.consultationId!).subscribe({
      next: (data) => {
        loading.dismiss();
        // Formata a data para o formato esperado pelo ion-datetime
        const scheduledDateTime = new Date(data.scheduledDateTime).toISOString();
        const nextAppointment = data.nextAppointment ? 
          new Date(data.nextAppointment).toISOString() : '';
        
        this.form.patchValue({
          ...data,
          scheduledDateTime,
          nextAppointment
        });
      },
      error: (err) => {
        loading.dismiss();
        this.presentAlert('Erro', 'Não foi possível carregar os dados da consulta.');
        console.error(err);
      }
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.markFormGroupTouched();
      this.presentAlert('Formulário Inválido', 'Por favor, corrija os erros antes de continuar.');
      return;
    }

    // Validar se o elderlyId existe
    if (!this.elderlyId) {
      this.presentAlert('Erro', 'ID do idoso não encontrado. Tente novamente.');
      return;
    }

    this.isSubmitting = true;

    // Preparar dados baseado no modo (criação vs edição)
    let formData: any;
    
    if (this.isEditMode) {
      // Modo edição: enviar todos os campos
      formData = { ...this.form.value };
      
      // Garantir formato correto para nextAppointment
      if (formData.nextAppointment) {
        // Se for apenas uma data (YYYY-MM-DD), manter assim
        // Se for datetime completo, converter para ISO
        const nextDate = new Date(formData.nextAppointment);
        if (!isNaN(nextDate.getTime())) {
          // Se é uma data válida, usar formato ISO apenas se necessário
          if (formData.nextAppointment.includes('T')) {
            formData.nextAppointment = nextDate.toISOString();
          } else {
            // Manter formato de data simples (YYYY-MM-DD)
            formData.nextAppointment = formData.nextAppointment.split('T')[0];
          }
        }
      }
    } else {
      // Modo criação: enviar apenas campos permitidos pelo CreateConsultationDto
      formData = {
        type: this.form.value.type,
        doctorName: this.form.value.doctorName,
        specialty: this.form.value.specialty,
        location: this.form.value.location,
        scheduledDateTime: this.form.value.scheduledDateTime,
        reason: this.form.value.reason,
        notes: this.form.value.notes,
        elderlyUserId: this.elderlyId // Sempre vem da URL
      };
    }

    // Capturar dados do lembrete antes de remover
    const reminderData = {
      enableReminder: formData.enableReminder,
      reminderTime: formData.reminderTime
    };

    // Remover campos de UI que não vão para o backend
    delete formData.enableReminder;
    delete formData.reminderTime;

    // Remover campos vazios ou null para evitar problemas de validação
    Object.keys(formData).forEach(key => {
      if (formData[key] === null || formData[key] === '') {
        delete formData[key];
      }
    });

    console.log('ConsultationForm - Dados a serem enviados:', formData);
    console.log('ConsultationForm - Dados do lembrete:', reminderData);

    const action = this.isEditMode
      ? this.consultationService.updateConsultation(this.consultationId!, formData)
      : this.consultationService.createConsultation(formData);

    action.subscribe({
      next: (response) => {
        // Se lembrete está habilitado e não é modo edição, criar lembrete
        if (reminderData.enableReminder && !this.isEditMode) {
          this.createConsultationReminder(response.consultation, reminderData.reminderTime);
        }
        
        this.isSubmitting = false;
        this.presentSuccessAlert();
        this.goBack();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.presentAlert(
          'Erro', 
          `Não foi possível ${this.isEditMode ? 'atualizar' : 'salvar'} a consulta. Verifique sua conexão e tente novamente.`
        );
        console.error(err);
      }
    });
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: `Consulta ${this.isEditMode ? 'atualizada' : 'agendada'} com sucesso.`,
      buttons: [
        {
          text: 'Ver Consulta',
          handler: () => {
            // Navegar para a lista de consultas
            this.goBack();
          }
        },
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

  markFormGroupTouched() {
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control?.markAsTouched();
    });
  }

  goBack() {
    this.router.navigate(['/consultation-list'], { 
      queryParams: { elderlyId: this.elderlyId } 
    });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({ 
      header, 
      message, 
      buttons: ['OK'] 
    });
    await alert.present();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (field?.errors?.['required']) {
      return 'Este campo é obrigatório';
    }
    if (field?.errors?.['minlength']) {
      const requiredLength = field.errors['minlength'].requiredLength;
      return `Mínimo de ${requiredLength} caracteres`;
    }
    if (field?.errors?.['futureDate']) {
      return 'A data deve ser no futuro (mínimo 15 minutos)';
    }
    return '';
  }

  // Validador customizado para datas futuras
  futureDateValidator = (control: any) => {
    if (!control.value) return null;
    
    const selectedDate = new Date(control.value);
    const minDate = new Date();
    minDate.setMinutes(minDate.getMinutes() + 15);
    
    return selectedDate < minDate ? { futureDate: true } : null;
  }

  // Formatar data/hora para exibição
  getFormattedDateTime(): string {
    const dateTime = this.form.get('scheduledDateTime')?.value;
    if (!dateTime) return '';
    
    const date = new Date(dateTime);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo'
    };
    
    return date.toLocaleDateString('pt-BR', options);
  }

  // Verificar se deve mostrar o resumo
  showSummary(): boolean {
    const specialty = this.form.get('specialty')?.value;
    const doctorName = this.form.get('doctorName')?.value;
    const scheduledDateTime = this.form.get('scheduledDateTime')?.value;
    
    return !!(specialty && doctorName && scheduledDateTime);
  }

  // Obter nome do idoso (não mais necessário, mas mantido para compatibilidade)
  getSelectedElderlyName(): string {
    return '';
  }

  // Criar lembrete para a consulta
  async createConsultationReminder(consultation: any, reminderMinutes: number) {
    try {
      console.log('Criando lembrete para consulta:', consultation);
      
      const consultationDate = new Date(consultation.scheduledDateTime);
      const reminderDate = new Date(consultationDate.getTime() - (reminderMinutes * 60 * 1000));
      
      const reminderData = {
        title: `Lembrete: Consulta de ${consultation.specialty}`,
        description: `Consulta com Dr. ${consultation.doctorName} em ${consultation.location}. Motivo: ${consultation.reason}`,
        type: ReminderType.APPOINTMENT,
        reminderDateTime: reminderDate.toISOString(),
        frequency: ReminderFrequency.ONCE,
        priority: 4, // Alta prioridade para consultas
        sendNotification: true,
        notificationMinutesBefore: 5, // Notificação 5 min antes do lembrete
        patientId: consultation.elderlyUserId,
        notes: `Lembrete automático criado ${reminderMinutes} minutos antes da consulta`
      };

      this.reminderService.createReminder(reminderData).subscribe({
        next: (response) => {
          console.log('Lembrete criado com sucesso:', response);
        },
        error: (error) => {
          console.error('Erro ao criar lembrete:', error);
          // Não mostrar erro para o usuário, pois a consulta já foi salva
        }
      });
      
    } catch (error) {
      console.error('Erro ao processar lembrete:', error);
    }
  }
}
