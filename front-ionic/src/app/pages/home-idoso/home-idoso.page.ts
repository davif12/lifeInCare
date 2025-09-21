import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  IonButton, 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard,
  IonCardContent,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonSpinner,
  IonRefresher,
  IonRefresherContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { 
  medkitOutline, 
  calendarOutline, 
  alertOutline, 
  pulseOutline,
  notificationsOutline,
  timeOutline,
  exitOutline,
  checkmarkCircleOutline
} from 'ionicons/icons';
import { ElderlyService } from '../../services/elderly.service';
import { ElderlyMedicationService, TodaySchedule, MedicationSummary } from '../../services/elderly-medication.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home-idoso',
  templateUrl: './home-idoso.page.html',
  styleUrls: ['./home-idoso.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton,
    IonCard,
    IonCardContent,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonSpinner,
    IonRefresher,
    IonRefresherContent,
    RouterLink
  ],
  providers: [ElderlyMedicationService]
})
export class HomeIdosoPage implements OnInit {
  nome: string = '';
  userData: any = null;
  loading = false;
  
  // Dados reais dos medicamentos
  todaySchedule: TodaySchedule[] = [];
  medicationSummary: MedicationSummary | null = null;
  
  // Dados estáticos como fallback (removidos os hardcoded)
  lembretes: any[] = [];

  constructor(
    private elderlyService: ElderlyService,
    private elderlyMedicationService: ElderlyMedicationService
  ) {
    addIcons({
      'medicine-outline': medkitOutline,
      'calendar-outline': calendarOutline,
      'alert-outline': alertOutline,
      'pulse-outline': pulseOutline,
      'notifications-outline': notificationsOutline,
      'time-outline': timeOutline,
      'exit-outline': exitOutline,
      'checkmark-circle-outline': checkmarkCircleOutline
    });
  }

  ngOnInit() {
    this.loadElderlyData();
    this.loadMedicationData();
  }

  loadElderlyData() {
    // Obter dados do usuário idoso do localStorage ou do token
    const elderlyToken = this.elderlyService.getElderlyToken();
    if (elderlyToken) {
      // Decodificar o token para obter os dados do usuário
      try {
        const tokenPayload = JSON.parse(atob(elderlyToken.split('.')[1]));
        console.log('Token payload:', tokenPayload);
        this.nome = tokenPayload.username || 'Idoso';
        this.userData = {
          id: tokenPayload.sub,
          name: tokenPayload.username,
          role: tokenPayload.role
        };
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
        this.nome = 'Idoso';
      }
    } else {
      console.log('Token não encontrado');
      this.nome = 'Idoso';
    }
  }

  async loadMedicationData() {
    if (!this.elderlyMedicationService.isAuthenticated()) {
      console.log('Idoso não autenticado, não carregando medicamentos');
      return;
    }

    this.loading = true;
    try {
      console.log('=== HOME-IDOSO: Carregando dados de medicamentos ===');
      
      // Carregar horários de hoje e resumo em paralelo
      const [todaySchedule, summary] = await Promise.all([
        firstValueFrom(this.elderlyMedicationService.getTodaySchedule()),
        firstValueFrom(this.elderlyMedicationService.getSummary())
      ]);

      this.todaySchedule = todaySchedule;
      this.medicationSummary = summary;

      // Converter horários de medicamentos em lembretes
      this.lembretes = this.todaySchedule.map(schedule => ({
        titulo: `${schedule.medicationName} - ${schedule.dosage}`,
        horario: schedule.time,
        concluido: false,
        tipo: 'medicamento',
        instructions: schedule.instructions
      }));

      console.log('Dados carregados com sucesso:');
      console.log('- Horários de hoje:', this.todaySchedule.length);
      console.log('- Resumo:', this.medicationSummary);
      console.log('- Lembretes gerados:', this.lembretes.length);

    } catch (error) {
      console.error('Erro ao carregar dados de medicamentos:', error);
      // Em caso de erro, manter lembretes vazios ou mostrar mensagem
      this.lembretes = [];
    } finally {
      this.loading = false;
    }
  }

  async doRefresh(event: any) {
    await this.loadMedicationData();
    event.target.complete();
  }

  sair() {
    console.log('Saindo...');
    this.elderlyService.elderlyLogout();
    // Redirecionar para página de entrada ou login
    window.location.href = '/entrada';
  }
}
