import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRotas } from './login.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRotas),
    FormsModule
  ]
})
export class LoginModule { }
