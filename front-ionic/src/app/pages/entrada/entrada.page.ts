import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { personOutline, medkitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink]
})
export class EntradaPage {
  constructor() {
    addIcons({ 
      'person-outline': personOutline,
      'medkit-outline': medkitOutline
    });
  }
}
