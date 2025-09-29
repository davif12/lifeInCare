import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { personOutline, eyeOutline, addOutline, refreshOutline, alertCircleOutline, medicalOutline } from 'ionicons/icons';
import { ElderlyService } from '../../services/elderly.service';
import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-lista-idosos',
  templateUrl: './lista-idosos.page.html',
  styleUrls: ['./lista-idosos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    DatePipe
  ]
})
export class ListaIdososPage implements OnInit {
  idosos: any[] = [];
  carregando = false;
  erro = false;
  mensagemErro = '';

  constructor(
    private elderlyService: ElderlyService,
    private router: Router,
    private authService: AuthService
  ) {
    addIcons({
      'person-outline': personOutline,
      'eye-outline': eyeOutline,
      'add-outline': addOutline,
      'refresh-outline': refreshOutline,
      'alert-circle-outline': alertCircleOutline,
      'medical-outline': medicalOutline
    });
  }

  ngOnInit() {
    console.log('ListaIdososPage - ngOnInit chamado');
    // Forçar parada do loading após 3 segundos para permitir debug
    setTimeout(() => {
      if (this.carregando) {
        console.log('Forçando parada do loading após timeout');
        this.carregando = false;
        this.erro = true;
        this.mensagemErro = 'Timeout na requisição. Use o botão TESTAR API para diagnosticar.';
      }
    }, 3000);
    
    this.obterIdosos();
  }

  obterIdosos() {
    this.carregando = true;
    this.erro = false;
    this.idosos = [];
    
    console.log('Iniciando obtenção de idosos');
    console.log('Token do cuidador:', this.authService.getToken());
    
    this.elderlyService.getElderlies()
      .pipe(
        timeout(15000), // 15 segundos de timeout
        catchError(error => {
          console.error('Erro na requisição de idosos:', error);
          this.carregando = false;
          this.erro = true;
          this.mensagemErro = `Erro: ${error.error?.message || error.message || 'Falha na comunicação com o servidor'}`;
          return of([]);
        })
      )
      .subscribe({
        next: (response) => {
          console.log('Resposta recebida (lista idosos):', response);
          this.carregando = false;
          this.idosos = Array.isArray(response) ? response : [];
          
          // Debug: verificar estrutura dos dados
          if (this.idosos.length > 0) {
            console.log('Primeiro idoso:', this.idosos[0]);
            console.log('Nome do primeiro idoso:', this.idosos[0].name);
            console.log('Todos os campos do primeiro idoso:', Object.keys(this.idosos[0]));
            console.log('Estrutura completa:', JSON.stringify(this.idosos[0], null, 2));
          }
          
          if (this.idosos.length === 0) {
            console.log('Nenhum idoso encontrado na resposta');
          } else {
            console.log(`${this.idosos.length} idosos encontrados`);
            this.erro = false;
          }
        },
        error: (error) => {
          console.error('Erro final ao obter idosos:', error);
          this.carregando = false;
          this.erro = true;
          this.mensagemErro = error.error?.message || 'Não foi possível carregar a lista de idosos';
          this.idosos = [];
        }
      });
  }

  atualizarLista(event: any) {
    this.obterIdosos();
    setTimeout(() => {
      // Garante que o refresher seja fechado mesmo que ocorra um erro
      event.target.complete();
    }, 2000); // 2 segundos de timeout
  }

  async visualizarIdoso(id: string) {
    // Buscar dados do idoso
    const idoso = this.idosos.find(i => i.id === id);
    if (!idoso) {
      console.error('Idoso não encontrado');
      return;
    }

    // Criar modal para solicitar PIN
    const { AlertController } = await import('@ionic/angular');
    const alertController = new AlertController();
    
    const alert = await alertController.create({
      header: `Acessar como ${idoso.name}`,
      message: 'Digite o PIN do idoso para visualizar como ele:',
      inputs: [
        {
          name: 'pin',
          type: 'text',
          placeholder: 'PIN de 6 dígitos',
          attributes: {
            maxlength: 6,
            pattern: '[0-9]*'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Acessar',
          handler: (data) => {
            if (data.pin && data.pin.length === 6) {
              this.loginAsElderly(data.pin);
              return true;
            } else {
              this.showPinError();
              return false;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async loginAsElderly(pin: string) {
    try {
      const response = await this.elderlyService.validatePin(pin).toPromise();
      
      if (response && (response.access_token || response.accessToken)) {
        const token = response.access_token || response.accessToken;
        this.elderlyService.saveElderlyToken(token);
        this.router.navigate(['/meus-medicamentos']);
      } else {
        this.showPinError('Resposta inválida do servidor');
      }
    } catch (error: any) {
      console.error('Erro ao validar PIN:', error);
      this.showPinError(error.error?.message || 'PIN inválido');
    }
  }

  async showPinError(message: string = 'PIN inválido. Verifique o código e tente novamente.') {
    const { ToastController } = await import('@ionic/angular');
    const toastController = new ToastController();
    const toast = await toastController.create({
      message,
      duration: 3000,
      color: 'danger',
      position: 'top'
    });
    await toast.present();
  }

  gerenciarConsultas(elderlyId: string) {
    this.router.navigate(['/consultation-list'], { 
      queryParams: { elderlyId: elderlyId } 
    });
  }


  cadastrarNovoIdoso() {
    this.router.navigate(['/cadastro-idoso']);
  }
}
