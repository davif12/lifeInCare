import { Component, OnInit } from '@angular/core';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { addIcons } from 'ionicons';
import { 
  personOutline, 
  personAddOutline,
  medkitOutline, 
  calendarOutline, 
  notificationsOutline,
  exitOutline,
  peopleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home-cuidador',
  templateUrl: './home-cuidador.page.html',
  styleUrls: ['./home-cuidador.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    RouterLink
  ]
})
export class HomeCuidadorPage implements OnInit {
  userData: any = null;

  constructor(private authService: AuthService) {
    addIcons({
      'person-outline': personOutline,
      'person-add-outline': personAddOutline,
      'medicine-outline': medkitOutline,
      'calendar-outline': calendarOutline,
      'notifications-outline': notificationsOutline,
      'exit-outline': exitOutline,
      'people-outline': peopleOutline
    });
  }

  ngOnInit() {
    this.userData = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }
}
