import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-debug-info',
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>Informações de Diagnóstico</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <div *ngIf="token">
          <p><strong>Token disponível:</strong> Sim</p>
          <p><strong>JWT Payload:</strong></p>
          <pre>{{ decodedToken | json }}</pre>
        </div>
        <div *ngIf="!token">
          <p><strong>Token disponível:</strong> Não</p>
          <p>Usuário não está autenticado corretamente.</p>
        </div>
        
        <div *ngIf="apiInfo">
          <p><strong>API Status:</strong></p>
          <pre>{{ apiInfo | json }}</pre>
        </div>

        <div *ngIf="apiError">
          <p><strong>API Erro:</strong></p>
          <pre>{{ apiError | json }}</pre>
        </div>

        <ion-button (click)="testarAPI()">Testar API</ion-button>
      </ion-card-content>
    </ion-card>
  `,
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class DebugInfoComponent implements OnInit {
  token: string | null = null;
  decodedToken: any = null;
  apiInfo: any = null;
  apiError: any = null;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.token = this.authService.getToken();
    if (this.token) {
      try {
        // Decodificar manualmente a parte do payload do JWT
        const base64Url = this.token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        this.decodedToken = JSON.parse(window.atob(base64));
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
        this.decodedToken = { error: 'Falha ao decodificar token' };
      }
    }
  }

  testarAPI() {
    const token = this.authService.getToken();
    if (!token) {
      this.apiError = { error: 'Token não disponível' };
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // Testar a API diretamente
    this.http.get('http://localhost:3006/elderly', { headers })
      .subscribe({
        next: (response) => {
          console.log('API respondeu:', response);
          this.apiInfo = response;
          this.apiError = null;
        },
        error: (error) => {
          console.error('Erro na API:', error);
          this.apiError = {
            status: error.status,
            statusText: error.statusText,
            message: error.error?.message || 'Erro desconhecido',
            name: error.name
          };
          this.apiInfo = null;
        }
      });
  }
}
