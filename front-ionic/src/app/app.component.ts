import { Component, OnInit, AfterViewInit, EnvironmentInjector } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-app>
      <ion-router-outlet [environmentInjector]="environmentInjector"></ion-router-outlet>
    </ion-app>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'front-ionic';
  
  constructor(public environmentInjector: EnvironmentInjector) {}
  
  ngOnInit() {}
  
  ngAfterViewInit() {
    // Solução para o problema de acessibilidade com aria-hidden em ion-router-outlet
    this.setupAccessibilityFix();
  }
  
  private setupAccessibilityFix() {
    // Configurar o MutationObserver para observar mudanças no DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            mutation.attributeName === 'aria-hidden' &&
            (mutation.target as HTMLElement).getAttribute('aria-hidden') === 'true') {
          
          // Encontrar elementos focáveis dentro do elemento com aria-hidden="true"
          const focusableElements = (mutation.target as HTMLElement).querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          // Se houver elementos focáveis, adicionar tabindex=-1 para evitar problemas de acessibilidade
          if (focusableElements.length > 0) {
            focusableElements.forEach(el => {
              // Salvar o tabindex original se existir
              if (!(el as HTMLElement).hasAttribute('data-original-tabindex') && 
                  (el as HTMLElement).hasAttribute('tabindex')) {
                (el as HTMLElement).setAttribute(
                  'data-original-tabindex', 
                  (el as HTMLElement).getAttribute('tabindex') || ''
                );
              }
              
              // Definir tabindex=-1 para evitar foco
              (el as HTMLElement).setAttribute('tabindex', '-1');
              
              // Se o elemento atual tem foco, mover o foco para o primeiro elemento focável fora do aria-hidden
              if (document.activeElement === el) {
                this.focusFirstAvailable();
              }
            });
          }
        } else if (mutation.type === 'attributes' && 
                  mutation.attributeName === 'aria-hidden' &&
                  (mutation.target as HTMLElement).getAttribute('aria-hidden') !== 'true') {
          
          // Restaurar tabindex original quando aria-hidden é removido
          const elementsToRestore = (mutation.target as HTMLElement).querySelectorAll('[data-original-tabindex]');
          elementsToRestore.forEach(el => {
            const originalValue = (el as HTMLElement).getAttribute('data-original-tabindex');
            if (originalValue) {
              (el as HTMLElement).setAttribute('tabindex', originalValue);
            } else {
              (el as HTMLElement).removeAttribute('tabindex');
            }
            (el as HTMLElement).removeAttribute('data-original-tabindex');
          });
        }
      });
    });
    
    // Observar todas as mudanças em atributos no documento
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['aria-hidden'],
      subtree: true
    });
  }
  
  private focusFirstAvailable() {
    // Encontrar e focar o primeiro elemento focável que não está em um container com aria-hidden
    const availableFocusableElements = document.querySelectorAll(
      'button:not([aria-hidden="true"] button):not([tabindex="-1"]), ' +
      'a:not([aria-hidden="true"] a):not([tabindex="-1"]), ' +
      'input:not([aria-hidden="true"] input):not([tabindex="-1"]), ' +
      'select:not([aria-hidden="true"] select):not([tabindex="-1"]), ' +
      'textarea:not([aria-hidden="true"] textarea):not([tabindex="-1"]), ' +
      '[tabindex]:not([tabindex="-1"]):not([aria-hidden="true"] [tabindex])'
    );
    
    if (availableFocusableElements.length > 0) {
      (availableFocusableElements[0] as HTMLElement).focus();
    }
  }
}