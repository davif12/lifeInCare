import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonLoading,
  IonLabel,
  IonItem,
  IonList,
  IonButton
} from '@ionic/angular/standalone';
import { NgIf, NgFor } from '@angular/common';
import { addIcons } from 'ionicons';
import { 
  pulseOutline, 
  medkitOutline, 
  calendarOutline, 
  notificationsOutline, 
  personOutline, 
  exitOutline, 
  timeOutline, 
  checkmarkCircleOutline,
  alertCircleOutline,
  eyeOutline
} from 'ionicons/icons';
import { ElderlyService } from '../../services/elderly.service';

@Component({
  selector: 'app-ver-idoso',
  templateUrl: './ver-idoso.page.html',
  styleUrls: ['./ver-idoso.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonLoading,
    IonLabel,
    IonItem,
    IonList,
    IonButton,
    NgIf,
    NgFor
  ]
})
export class VerIdosoPage implements OnInit {
  idosoId: string = '';
  idoso: any = null;
  carregando = false;
  erro = false;
  mensagemErro = '';
  
  // Dados simulados para a visualização
  lembretes = [
    { titulo: 'Tomar medicação', horario: '08:00' },
    { titulo: 'Consulta com Dr. Silva', horario: '14:30' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private elderlyService: ElderlyService
  ) {
    addIcons({
      'pulse-outline': pulseOutline,
      'medicine-outline': medkitOutline,
      'calendar-outline': calendarOutline,
      'notifications-outline': notificationsOutline,
      'person-outline': personOutline,
      'exit-outline': exitOutline,
      'time-outline': timeOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'alert-circle-outline': alertCircleOutline,
      'eye-outline': eyeOutline
    });
  }

  ngOnInit() {
    this.idosoId = this.route.snapshot.paramMap.get('id') || '';
    if (this.idosoId) {
      this.obterDadosIdoso();
    } else {
      this.erro = true;
      this.mensagemErro = 'ID do idoso não fornecido';
    }
  }

  obterDadosIdoso() {
    this.carregando = true;
    console.log('Iniciando carregamento'); // 👈
  
    this.elderlyService.getElderly(this.idosoId).subscribe({
      next: (response) => {
        console.log('Dados recebidos:', response); // 👈
        this.idoso = response;
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro ao obter dados do idoso:', error); // 👈
        this.erro = true;
        this.mensagemErro = error.error?.message || error.message || 'Erro desconhecido';
        this.carregando = false;
      }
    });
  }

  voltar() {
    this.router.navigate(['/cuidador/lista-idosos']);
  }

  sair() {
    // Apenas para simulação - não faz logout de verdade
    this.voltar();
  }
}
