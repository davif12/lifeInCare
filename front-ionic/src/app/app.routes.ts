import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { elderlyGuard } from './guards/elderly.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrada',
    pathMatch: 'full'
  },
  {
    path: 'entrada',
    loadChildren: () => import('./pages/entrada/entrada.routes').then(m => m.routes)
  },
  {
    path: 'login-cuidador',
    loadChildren: () => import('./pages/login-cuidador/login-cuidador.routes').then(m => m.routes)
  },
  {
    path: 'cadastro-cuidador',
    loadChildren: () => import('./pages/cadastro-cuidador/cadastro-cuidador.routes').then(m => m.routes)
  },
  {
    path: 'acesso-idoso',
    loadChildren: () => import('./pages/acesso-idoso/acesso-idoso.routes').then(m => m.routes)
  },
  {
    path: 'home-idoso',
    canActivate: [elderlyGuard],
    loadChildren: () => import('./pages/home-idoso/home-idoso.routes').then(m => m.routes)
  },
  {
    path: 'saude',
    canActivate: [elderlyGuard],
    loadChildren: () => import('./pages/saude/saude.routes').then(m => m.routes)
  },
  {
    path: 'home-cuidador',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/home-cuidador/home-cuidador.routes').then(m => m.routes)
  },
  {
    path: 'cadastro-idoso',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/cadastro-idoso/cadastro-idoso.routes').then(m => m.routes)
  },
  {
    path: 'cuidador/lista-idosos',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/lista-idosos/lista-idosos.routes').then(m => m.routes)
  },
  {
    path: 'cuidador/ver-idoso/:id',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/ver-idoso/ver-idoso.routes').then(m => m.routes)
  },
  {
    path: 'cuidador/cadastro-medicamento/:elderlyId',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/cadastro-medicamento/cadastro-medicamento.routes').then(m => m.routes)
  },
  {
    path: 'medicamentos',
    loadComponent: () => import('./pages/medicamentos/medicamentos.page').then(m => m.MedicamentosPage),
    canActivate: [authGuard]
  },
  {
    path: 'meus-medicamentos',
    loadComponent: () => import('./pages/meus-medicamentos/meus-medicamentos.page').then(m => m.MeusMedicamentosPage),
    canActivate: [elderlyGuard]
  },
  {
    path: 'consultation-list',
    loadComponent: () => import('./pages/consultation-list/consultation-list.page').then(m => m.ConsultationListPage),
    canActivate: [authGuard]
  },
  {
    path: 'consultation-form',
    loadComponent: () => import('./pages/consultation-form/consultation-form.page').then(m => m.ConsultationFormPage),
    canActivate: [authGuard]
  },
  {
    path: 'my-consultations',
    loadComponent: () => import('./pages/my-consultations/my-consultations.page').then(m => m.MyConsultationsPage),
    canActivate: [elderlyGuard]
  },
  {
    path: 'consultas',
    redirectTo: 'cuidador/lista-idosos'
  },
  {
    path: '**',
    redirectTo: 'entrada'
  }
];
