import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonicModule, ToastController, LoadingController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { 
  medicalOutline, 
  timeOutline, 
  calendarOutline, 
  arrowBackOutline,
  addOutline,
  removeOutline,
  alertCircleOutline,
  checkmarkCircleOutline,
  personOutline
} from 'ionicons/icons';
import { MedicationService } from '../../services/medication.service';
import { ElderlyService } from '../../services/elderly.service';

@Component({
  selector: 'app-cadastro-medicamento',
  templateUrl: './cadastro-medicamento.page.html',
  styleUrls: ['./cadastro-medicamento.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class CadastroMedicamentoPage implements OnInit {
  elderlyId: string = '';
  elderly: any = null;
  
  medicamento = {
    name: '',
    dosage: '',
    frequency: 'daily',
    times: ['08:00'],
    startDate: new Date().toISOString(),
    endDate: '',
    instructions: '',
    elderlyId: ''
  };

  frequencyOptions = [
    { value: 'daily', label: 'Diário' },
    { value: 'weekly', label: 'Semanal' },
    { value: 'monthly', label: 'Mensal' },
    { value: 'as_needed', label: 'Conforme necessário' }
  ];

  isLoading = false;
  errorMessage = '';

  constructor(
    private medicationService: MedicationService,
    private elderlyService: ElderlyService,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    addIcons({
      'medical-outline': medicalOutline,
      'time-outline': timeOutline,
      'calendar-outline': calendarOutline,
      'arrow-back-outline': arrowBackOutline,
      'add-outline': addOutline,
      'remove-outline': removeOutline,
      'alert-circle-outline': alertCircleOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'person-outline': personOutline
    });
  }

  ngOnInit() {
    this.elderlyId = this.route.snapshot.paramMap.get('elderlyId') || '';
    if (this.elderlyId) {
      this.medicamento.elderlyId = this.elderlyId;
      this.loadElderlyInfo();
    }
  }

  async loadElderlyInfo() {
    try {
      this.elderly = await this.elderlyService.getElderly(this.elderlyId).toPromise();
    } catch (error) {
      console.error('Erro ao carregar informações do idoso:', error);
      this.showToast('Erro ao carregar informações do idoso', 'danger');
    }
  }

  addTime() {
    this.medicamento.times.push('08:00');
  }

  removeTime(index: number) {
    if (this.medicamento.times.length > 1) {
      this.medicamento.times.splice(index, 1);
    }
  }

  async onSubmit() {
    if (!this.validateForm()) {
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Cadastrando medicamento...'
    });
    await loading.present();

    try {
      await this.medicationService.createMedication(this.medicamento).toPromise();
      await loading.dismiss();
      await this.showToast('Medicamento cadastrado com sucesso!', 'success');
      this.router.navigate(['/cuidador/ver-idoso', this.elderlyId]);
    } catch (error: any) {
      await loading.dismiss();
      console.error('Erro ao cadastrar medicamento:', error);
      this.errorMessage = error.error?.message || 'Erro ao cadastrar medicamento';
      await this.showToast(this.errorMessage, 'danger');
    }
  }

  validateForm(): boolean {
    if (!this.medicamento.name.trim()) {
      this.showToast('Nome do medicamento é obrigatório', 'warning');
      return false;
    }
    
    if (!this.medicamento.dosage.trim()) {
      this.showToast('Dosagem é obrigatória', 'warning');
      return false;
    }

    if (this.medicamento.times.length === 0) {
      this.showToast('Pelo menos um horário deve ser definido', 'warning');
      return false;
    }

    return true;
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'top'
    });
    await toast.present();
  }

  goBack() {
    this.router.navigate(['/cuidador/ver-idoso', this.elderlyId]);
  }
}
