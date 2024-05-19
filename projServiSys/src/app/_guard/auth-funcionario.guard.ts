import { CanActivateFn } from '@angular/router';

export const authFuncionarioGuard: CanActivateFn = function (this: any, route, state) {
  const isLoggedIn = this.authService.isLoggedIn(); // Supondo que o usuário está autenticado
  const isFuncionario = this.authService.isFuncionario(); // Supondo que o usuário é um Funcionário
  if (!isLoggedIn || !isFuncionario) {
    // Se o usuário não estiver autenticado ou não for Funcionário
    console.log('Acesso não autorizado para Funcionário');
    this.router.navigate(['/login']);
    return false; // Impedir o acesso à rota protegida
  }
  return true; // Permitir o acesso à rota protegida
}


