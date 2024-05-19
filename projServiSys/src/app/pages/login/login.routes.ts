import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const LoginRotas: Routes = [
  
    /*path: '',
    component: LoginComponent,
    children: [*/
      {
        path: 'funcionario',
        component: LoginComponent,
        data: { tipoUsuario: 'funcionario' }
      },
      { 
        path: 'coordenador', 
        component: LoginComponent, 
        data: { tipoUsuario: 'coordenador' } 
      },
      { 
        path: 'cpd', 
        component: LoginComponent, 
        data: { tipoUsuario: 'cpd' } 
      },
      { // Redireciona para o login de Funcionário por padrão
        path: '', 
        redirectTo: '/login/funcionario', 
        pathMatch: 'full' 
      }, 
      { // Redireciona para o login de Funcionário se a rota não for encontrada
        path: '**', 
        redirectTo: '/login/funcionario' 
      }, 
    ]
/*  }
]*/