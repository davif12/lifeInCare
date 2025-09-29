import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { addIcons } from 'ionicons';
import { 
  personOutline, 
  personAddOutline,
  medkitOutline, 
  calendarOutline, 
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
    IonicModule,
    RouterLink
  ]
})
export class HomeCuidadorPage implements OnInit {
  userData: any = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    addIcons({
      'person-outline': personOutline,
      'person-add-outline': personAddOutline,
      'medicine-outline': medkitOutline,
      'calendar-outline': calendarOutline,
      'exit-outline': exitOutline,
      'people-outline': peopleOutline
    });
  }

  ngOnInit() {
    this.userData = this.authService.getUser();
  }

  navigateToMedicamentos() {
    console.log('=== NAVEGANDO PARA MEDICAMENTOS ===');
    this.router.navigate(['/medicamentos']);
  }

  logout() {
    this.authService.logout();
  }
}
