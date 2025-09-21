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
  IonBackButton,
  IonButtons,
  IonIcon,
  IonSpinner
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { keyOutline, arrowBackOutline, alertCircleOutline } from 'ionicons/icons';
import { NgIf } from '@angular/common';
import { ElderlyService } from '../../services/elderly.service';

@Component({
  selector: 'app-acesso-idoso',
  templateUrl: './acesso-idoso.page.html',
  styleUrls: ['./acesso-idoso.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonInput, 
    IonItem, 
    IonLabel,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonSpinner,
    FormsModule,
    NgIf
  ]
})
export class AcessoIdosoPage {
  codigoAcesso: string = '';
  isLoading = false;
  errorMessage = '';
  showError = false;

  constructor(
    private elderlyService: ElderlyService,
    private router: Router
  ) {
    addIcons({
      'key-outline': keyOutline,
      'arrow-back-outline': arrowBackOutline,
      'alert-circle-outline': alertCircleOutline
    });
    
    // Limpar qualquer token anterior para forçar novo login
    this.elderlyService.elderlyLogout();
  }

  acessar() {
    if (!this.codigoAcesso || this.codigoAcesso.trim() === '') {
      this.showError = true;
      this.errorMessage = 'Por favor, digite o código de acesso';
      return;
    }
    
    this.isLoading = true;
    this.showError = false;
    
    console.log('=== INICIANDO LOGIN DO IDOSO ===');
    console.log('PIN digitado:', this.codigoAcesso);
    
    this.elderlyService.validatePin(this.codigoAcesso).subscribe({
      next: (response) => {
        console.log('=== LOGIN BEM-SUCEDIDO ===');
        console.log('Resposta completa:', response);
        this.isLoading = false;
        
        // Salvar o token do idoso (verificar diferentes formatos de resposta)
        if (response && (response.access_token || response.accessToken)) {
          const token = response.access_token || response.accessToken;
          console.log('Token a ser salvo:', token);
          
          // Verificar localStorage antes de salvar
          console.log('localStorage antes de salvar:', localStorage.getItem('elderly_token'));
          
          this.elderlyService.saveElderlyToken(token);
          
          // Verificar localStorage após salvar
          console.log('localStorage após salvar:', localStorage.getItem('elderly_token'));
          
          // Verificar se o token foi realmente salvo
          const savedToken = this.elderlyService.getElderlyToken();
          console.log('Token recuperado via service:', savedToken);
          
          if (savedToken) {
            console.log('✅ Token salvo com sucesso, redirecionando...');
            // Redirecionar para a página inicial do idoso
            this.router.navigate(['/home-idoso']);
          } else {
            console.error('❌ Falha ao salvar token');
            this.showError = true;
            this.errorMessage = 'Erro ao salvar token de acesso';
          }
        } else {
          console.error('❌ Resposta não contém token válido');
          console.error('Resposta do servidor:', response);
          this.showError = true;
          this.errorMessage = 'Resposta inválida do servidor';
        }
      },
      error: (error) => {
        console.error('=== ERRO NO LOGIN ===');
        console.error('Erro completo:', error);
        this.isLoading = false;
        this.showError = true;
        this.errorMessage = error.error?.message || 'PIN inválido ou erro ao acessar';
      }
    });
  }
}
