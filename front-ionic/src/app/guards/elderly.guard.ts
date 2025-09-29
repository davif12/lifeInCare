import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { ElderlyService } from '../services/elderly.service';

export const elderlyGuard: CanActivateFn = (route, state) => {
  const elderlyService = inject(ElderlyService);
  const router = inject(Router);
  
  console.log('=== ELDERLY GUARD: Verificando autenticação do idoso ===');
  console.log('Token do idoso existe:', elderlyService.isElderlyLoggedIn());
  
  if (elderlyService.isElderlyLoggedIn()) {
    console.log('✅ Idoso autenticado, permitindo acesso');
    return true;
  }
  
  console.log('❌ Idoso não autenticado, redirecionando para login');
  // Redireciona para a página de login do idoso se não estiver autenticado
  router.navigate(['/acesso-idoso']);
  return false;
};
