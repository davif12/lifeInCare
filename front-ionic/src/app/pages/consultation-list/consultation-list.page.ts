import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, LoadingController } from '@ionic/angular';
import { Consultation, ConsultationService } from '../../services/consultation.service';
import { ElderlyService } from '../../services/elderly.service';

@Component({
  selector: 'app-consultation-list',
  templateUrl: './consultation-list.page.html',
  styleUrls: ['./consultation-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ConsultationListPage implements OnInit {
  consultations: Consultation[] = [];
  elderlyId: string | null = null;
  elderlyName: string = '';
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consultationService: ConsultationService,
    private elderlyService: ElderlyService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.elderlyId = params['elderlyId'];
      if (this.elderlyId) {
        this.loadElderlyInfo();
        this.loadConsultations();
      } else {
        console.error('ID do idoso não encontrado na URL!');
        // Opcional: redirecionar ou mostrar erro
      }
    });
  }

  ionViewWillEnter() {
    if (this.elderlyId) {
      this.loadConsultations();
    }
  }

  async loadConsultations() {
    this.loading = true;
    const loading = await this.loadingController.create({ 
      message: 'Carregando consultas...' 
    });
    await loading.present();

    this.consultationService.getConsultationsByPatient(this.elderlyId!).subscribe({
      next: (data) => {
        this.consultations = data;
        this.loading = false;
        loading.dismiss();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        loading.dismiss();
        this.presentAlert('Erro', 'Não foi possível carregar as consultas.');
      }
    });
  }

  loadElderlyInfo() {
    this.elderlyService.getElderly(this.elderlyId!).subscribe({
      next: (elderly) => {
        this.elderlyName = elderly.name || 'Idoso';
      },
      error: (err) => {
        console.error('Erro ao carregar dados do idoso:', err);
        this.elderlyName = 'Idoso';
      }
    });
  }

  goToCreate() {
    this.router.navigate(['/consultation-form'], { 
      queryParams: { elderlyId: this.elderlyId } 
    });
  }

  goToEdit(consultationId: string) {
    this.router.navigate(['/consultation-form'], { 
      queryParams: { id: consultationId, elderlyId: this.elderlyId } 
    });
  }

  async confirmDelete(consultationId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: 'Tem certeza de que deseja excluir esta consulta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => this.deleteConsultation(consultationId)
        }
      ]
    });
    await alert.present();
  }

  async deleteConsultation(id: string) {
    const loading = await this.loadingController.create({ 
      message: 'Excluindo consulta...' 
    });
    await loading.present();

    this.consultationService.deleteConsultation(id).subscribe({
      next: () => {
        loading.dismiss();
        this.presentAlert('Sucesso', 'Consulta excluída com sucesso.');
        this.loadConsultations(); // Recarrega a lista
      },
      error: (err) => {
        loading.dismiss();
        console.error(err);
        this.presentAlert('Erro', 'Não foi possível excluir a consulta.');
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
}
