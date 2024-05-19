import { CanActivateFn } from '@angular/router';

export const authCpdGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = true; // Supondo que o usuário está autenticado
  const isCPD = true; // Supondo que o usuário é um Funcionário
  if (!isLoggedIn || !isCPD) {
    // Se o usuário não estiver autenticado ou não for Funcionário
    console.log('Acesso não autorizado para CPD');
    return false; // Impedir o acesso à rota protegida
  }
  return true; // Permitir o acesso à rota protegida
};
