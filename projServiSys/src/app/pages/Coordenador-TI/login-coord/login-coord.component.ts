import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-coord',
  templateUrl: './login-coord.component.html',
  styleUrls: ['./login-coord.component.scss']
})
export class LoginCoordComponent {

  constructor(private router: Router) {}

  redirecionaHome() {
    this.router.navigate(['/coord/home']);
  }
}
