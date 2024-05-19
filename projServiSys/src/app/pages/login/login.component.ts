import { environment } from './../../../environments/environment';
import { AutorizacaoService } from './../../services/autorizacao.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, EnvironmentInjector } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent {

  usuario: string = '';
  senha: string = '';

  loginAutorizado: true | undefined;
  tipoUsuario: string | undefined;
  logoPath: string | undefined;
  //route: any;

  //authService: any;
  
  /*clicar(){
    alert('Login realizado');
  }*/

  constructor(
    private router: Router,
    //private autorizacaoService:AutorizacaoService,
    private route: ActivatedRoute
  ) {
    console.log(environment.api)
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipoUsuario = params['tipoUsuario'];
      this.carregarLogo();
    });
  }


  //ver como fazer o tipoUsuario ser visivel a partir da rota
  realizarLogin(): void {
    // Use o observable params para obter os dados da rota
    /*this.route.params.pipe(
      switchMap(params => {
        // Defina o tipo de usuário com base nos parâmetros da rota
        this.tipoUsuario = params['tipoUsuario'];
        console.log(this.tipoUsuario);
        // Chame o método login usando os dados da rota
       // return this.login('tipoUsuario');
      })
    ).subscribe(success => {
      if (success) {
        // Redirecionar para a página inicial correspondente apenas em caso de login bem-sucedido
        this.redirectToHome(success);
      } else {
        // Exibir uma mensagem de erro em caso de credenciais inválidas
        alert('Credenciais inválidas. Tente novamente.');
      }
    });*/
  }

 /* private login(tipoUsuario: string): Observable<boolean> {
    // Chame o método login do serviço AuthLoginService
    return (this.authLoginService.fazerLogin({ tipoUsuario, login: this.usuario, senha: this.senha }));
  }*/

  private redirectToHome(success: boolean): void {
    // Redirecionar para a página inicial correspondente após o login bem-sucedido
    if (success) {
      switch (this.tipoUsuario) {
        case 'funcionario':
          this.router.navigate(['/funcionario/home']);
          break;
        case 'coordenador':
          this.router.navigate(['/coordenador/home']);
          break;
        case 'cpd':
          this.router.navigate(['/cpd/home']);
          break;
        default:
          // Redirecionar para uma página padrão se o tipo de usuário não for reconhecido
          this.router.navigate(['/']);
          break;
      }
    }
  }

   private carregarLogo(): void {
    switch (this.tipoUsuario) {
      case 'funcionario':
        this.logoPath = 'assets/images/ServiSysLogoBranca.png';
        console.log(this.tipoUsuario);
        break;
      case 'coordenador':
        this.logoPath = 'assets/images/ServiSysLogoADM.png';
        console.log(this.tipoUsuario);
        break;
      case 'cpd':
        this.logoPath = 'assets/images/ServiSysLogoCPD.png';
        console.log(this.tipoUsuario);
        break;
      default:
        this.logoPath = 'assets/images/ServiSysLogoBranca.png';
       // console.log(this.tipoUsuario);
        break;
    }
  }
}