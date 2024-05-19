import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { LoginComponent } from './login.component';
import { LoginRotas } from './login.routes'; //arrumar esse erro
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRotas)
  ]
})
export class LoginModule { }
