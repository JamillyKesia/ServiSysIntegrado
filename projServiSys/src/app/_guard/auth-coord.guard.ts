import { CanActivateFn } from '@angular/router';

export const authCoordGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = true; // Supondo que o usuário está autenticado
  const isCoord = true; // Supondo que o usuário é um Funcionário
  if (!isLoggedIn || !isCoord) {
    // Se o usuário não estiver autenticado ou não for Funcionário
    console.log('Acesso não autorizado para Coordenador');
    return false; // Impedir o acesso à rota protegida
  }
  return true; // Permitir o acesso à rota protegida
};
