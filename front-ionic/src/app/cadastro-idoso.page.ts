import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonList,
  IonNote,
  IonToast,
  IonicModule
} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { personOutline, calendarOutline, arrowBackOutline, medicalOutline, callOutline, closeOutline } from 'ionicons/icons';
import { ElderlyService } from '../../services/elderly.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cadastro-idoso',
  templateUrl: './cadastro-idoso.page.html',
  styleUrls: ['./cadastro-idoso.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    NgIf,
  ]
})
export class CadastroIdosoPage {
  elderly = {
    name: '',
    birthDate: '',
    medicalInfo: '',
    contactInfo: ''
  };

  showSuccessToast = false;
  registeredPin = '';
  isSubmitting = false;
  errorMessage = '';
  maxDate = new Date().toISOString();

  constructor(
    private elderlyService: ElderlyService,
    private router: Router
  ) {
    addIcons({
      'person-outline': personOutline,
      'calendar-outline': calendarOutline,
      'arrow-back-outline': arrowBackOutline,
      'medical-outline': medicalOutline,
      'call-outline': callOutline,
      'close-outline': closeOutline
    });
  }

  onSubmit() {
    if (!this.validate()) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    // Formatar a data para o formato esperado pelo backend (ISO string)
    const formattedData = {
      ...this.elderly,
      birthDate: new Date(this.elderly.birthDate).toISOString().split('T')[0]
    };

    this.elderlyService.registerElderly(formattedData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.registeredPin = response.pin;
        this.showSuccessToast = true;
        
        // Limpar o formulário após o cadastro bem-sucedido
        this.resetForm();
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Erro ao cadastrar idoso:', error);
        this.errorMessage = error.error?.message || 'Ocorreu um erro ao cadastrar o idoso. Tente novamente.';
      }
    });
  }

  validate(): boolean {
    if (!this.elderly.name.trim()) {
      this.errorMessage = 'O nome é obrigatório.';
      return false;
    }
    
    if (!this.elderly.birthDate) {
      this.errorMessage = 'A data de nascimento é obrigatória.';
      return false;
    }
    
    return true;
  }

  resetForm() {
    this.elderly = {
      name: '',
      birthDate: '',
      medicalInfo: '',
      contactInfo: ''
    };
  }

  navigateToElderlyList() {
    this.router.navigate(['/lista-idosos']);
  }
}
