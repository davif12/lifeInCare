import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  ToastController,
  LoadingController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { 
  lockClosedOutline, 
  mailOutline, 
  arrowBackOutline, 
  personOutline, 
  callOutline,
  personAddOutline 
} from 'ionicons/icons';
import { CuidadorService } from '../../services/cuidador.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cadastro-cuidador',
  templateUrl: './cadastro-cuidador.page.html',
  styleUrls: ['./cadastro-cuidador.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    RouterLink
  ]
})
export class CadastroCuidadorPage {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  password: string = '';
  confirmPassword: string = '';
  isLoading: boolean = false;

  constructor(
    private cuidadorService: CuidadorService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    addIcons({
      'lock-closed-outline': lockClosedOutline,
      'mail-outline': mailOutline,
      'arrow-back-outline': arrowBackOutline,
      'person-outline': personOutline,
      'call-outline': callOutline,
      'person-add-outline': personAddOutline
    });
  }

  async registrar() {
    // Validações básicas
    if (!this.nome || !this.email || !this.telefone || !this.password) {
      await this.presentToast('Por favor, preencha todos os campos!', 'danger');
      return;
    }

    if (this.password !== this.confirmPassword) {
      await this.presentToast('As senhas não coincidem!', 'danger');
      return;
    }

    // Mostrar loading
    this.isLoading = true;
    const loading = await this.loadingController.create({
      message: 'Cadastrando...',
      spinner: 'circles'
    });
    await loading.present();

    try {
      // Preparar dados para o backend (usando a mesma estrutura do DTO no backend)
      const cuidadorData = {
        name: this.nome,
        email: this.email,
        password: this.password
      };

      console.log('Enviando cadastro cuidador:', cuidadorData);

      // Chamar o serviço de cadastro
      const resp = await firstValueFrom(this.cuidadorService.registrar(cuidadorData));
      console.log('Resposta cadastro cuidador:', resp);

      // Tratar respostas com success=false mesmo com status 200
      if (resp && resp.success === false) {
        const msg = resp.message || 'Erro ao realizar cadastro.';
        await loading.dismiss();
        this.isLoading = false;
        await this.presentToast(msg, 'danger');
        return;
      }

      // Fechar loading
      await loading.dismiss();
      this.isLoading = false;
      
      // Mostrar mensagem de sucesso
      await this.presentToast('Cadastro realizado com sucesso!', 'success');
      
      // Redirecionar para a página de login
      this.router.navigate(['/login-cuidador']);
    } catch (error: any) {
      // Fechar loading
      await loading.dismiss();
      this.isLoading = false;
      
      // Log detalhado no console para diagnóstico
      console.error('Cadastro cuidador erro:', {
        status: error?.status,
        statusText: error?.statusText,
        url: error?.url,
        error: error?.error,
      });

      // Mostrar mensagem de erro
      let message = 'Erro ao realizar cadastro.';
      const errMsg = error?.error?.message;
      if (Array.isArray(errMsg)) {
        message = errMsg[0];
      } else if (typeof errMsg === 'string') {
        message = errMsg;
      } else if (typeof error?.message === 'string') {
        message = error.message;
      }
      await this.presentToast(message, 'danger');
    }
  }

  async presentToast(message: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color
    });
    
    await toast.present();
  }
}
