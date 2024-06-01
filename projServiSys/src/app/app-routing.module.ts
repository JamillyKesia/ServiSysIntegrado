import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const AppRotas: Routes = [
  {
   path: '',
   redirectTo:'login',
   pathMatch:'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/tela-principal/tela-principal.module').then(X => X.TelaPrincipalModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(X => X.LoginModule)
  }/*,
  {
    path: 'login',
    loadChildren: () => import('./pages/login/CPD/login.module').then(X => X.LoginModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(X => X.LoginModule)
  }*/
]

@NgModule({
  imports: [RouterModule.forRoot(AppRotas),],
  exports: []
})
export class AppRoutingModule {}
