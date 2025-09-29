import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, LoadingController, AlertController } from '@ionic/angular';
import { Consultation, ConsultationService } from '../../services/consultation.service';
import { AuthService } from '../../auth.service';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-my-consultations',
  templateUrl: './my-consultations.page.html',
  styleUrls: ['./my-consultations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MyConsultationsPage implements OnInit {
  consultations: Consultation[] = [];
  userName: string = '';
  loading = false;

  constructor(
    private consultationService: ConsultationService,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    // Adicionar ícones
    addIcons({
      'information-circle-outline': informationCircleOutline
    });
  }

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.userName = user.name || 'Usuário';
    }
  }

  ionViewWillEnter() {
    this.loadMyConsultations();
  }

  async loadMyConsultations() {
    this.loading = true;
    const loading = await this.loadingController.create({ 
      message: 'Carregando suas consultas...' 
    });
    await loading.present();

    this.consultationService.getMyConsultations().subscribe({
      next: (data) => {
        this.consultations = data;
        this.loading = false;
        loading.dismiss();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        loading.dismiss();
        this.presentAlert('Erro', 'Não foi possível carregar suas consultas.');
      }
    });
  }

  async doRefresh(event: any) {
    this.consultationService.getMyConsultations().subscribe({
      next: (data) => {
        this.consultations = data;
        event.target.complete();
      },
      error: (err) => {
        console.error(err);
        event.target.complete();
        this.presentAlert('Erro', 'Não foi possível atualizar as consultas.');
      }
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

  getStatusColor(status: string): string {
    switch (status) {
      case 'scheduled': return 'primary';
      case 'completed': return 'success';
      case 'cancelled': return 'danger';
      case 'rescheduled': return 'warning';
      default: return 'medium';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'scheduled': return 'Agendada';
      case 'completed': return 'Concluída';
      case 'cancelled': return 'Cancelada';
      case 'rescheduled': return 'Reagendada';
      default: return status;
    }
  }

  getTypeText(type: string): string {
    switch (type) {
      case 'routine': return 'Rotina';
      case 'emergency': return 'Emergência';
      case 'follow_up': return 'Retorno';
      case 'specialist': return 'Especialista';
      default: return type;
    }
  }

  isUpcoming(dateTime: string): boolean {
    return new Date(dateTime) > new Date();
  }

  isPast(dateTime: string): boolean {
    return new Date(dateTime) < new Date();
  }
}
