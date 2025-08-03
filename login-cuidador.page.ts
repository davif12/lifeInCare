import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonBackButton,
  IonButtons,
  ToastController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { 
  lockClosedOutline, 
  mailOutline,
  arrowBackOutline,
  logInOutline
} from 'ionicons/icons';
import { AuthService } from '../../services/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-cuidador',
  templateUrl: './login-cuidador.page.html',
  styleUrls: ['./login-cuidador.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
    IonBackButton,
    IonButtons,
    RouterLink
  ]
})
export class LoginCuidadorPage {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  showToast: boolean = false;
  toastMessage: string = '';
  toastColor: string = 'danger';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
    addIcons({
      'lock-closed-outline': lockClosedOutline,
      'mail-outline': mailOutline,
      'arrow-back-outline': arrowBackOutline,
      'log-in-outline': logInOutline
    });
  }

  async login() {
    if (!this.email || !this.password) {
      this.presentToast('Por favor, preencha todos os campos', 'danger');
      return;
    }

    this.isLoading = true;

    try {
      await firstValueFrom(this.authService.login(this.email, this.password));
      this.isLoading = false;
      this.router.navigate(['/home-cuidador']);
    } catch (error: any) {
      this.isLoading = false;
      let message = 'Erro ao fazer login';
      
      if (error.error && error.error.message) {
        message = error.error.message;
      } else if (error.message) {
        message = error.message;
      }
      
      this.presentToast(message, 'danger');
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
