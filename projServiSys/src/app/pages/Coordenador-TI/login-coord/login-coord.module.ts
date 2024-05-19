import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginCoordRotas } from './login-coord.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginCoordRotas)
  ]
})
export class LoginCoordModule { }
