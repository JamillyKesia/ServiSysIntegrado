import { AccountService } from './../../services/account.service';
import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserLogin } from 'src/app/models/identity/user-login';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent {

  //model: any = {};
  model: UserLogin = new UserLogin();

  constructor(private accountService: AccountService,
              private router: Router/*,
              private toaster: ToastrService*/){}

    ngOnInit(): void {}

    public login(): void {
      this.accountService.login(this.model).subscribe(
        () => { 
          this.router.navigateByUrl('/principal/home');
        },
        (error: any) => {
          if (error.status == 401){
            //this.toaster.error('usuario invalido');
          }
          else console.error(error);
        }
      )
    }
}