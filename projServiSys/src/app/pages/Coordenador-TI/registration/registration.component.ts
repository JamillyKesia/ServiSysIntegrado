import { AccountService } from '../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorField } from 'src/app/helpers/validator-field';
import { User } from 'src/app/models/identity/user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  user = {} as User;
  form!: FormGroup;

  constructor(public fb: FormBuilder,
              private accountService: AccountService,
              private router: Router
  ) { }

  get f(): any { return this.form.controls; }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('password', 'confirmePassword')
    };

    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', 
        [Validators.required, Validators.email]
      ],
      userName: ['', [
        Validators.required,
        Validators.minLength(3),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
      ]],
      confirmePassword: ['', [
        Validators.required
      ]],
      tipoUsuario: ['', Validators.required],
      cargo: ['', Validators.required]
    }, formOptions);
  }

  public cssValidator(campoForm: FormControl): any {
    return {'is-invalid': campoForm.errors && campoForm.touched};
  }

  register(): void {
    this.user = { ... this.form.value }
    this.accountService.register(this.user).subscribe(
      () => this.router.navigateByUrl('/principal/home-coord')
      //(error: any) => this.toaster.error(error.error);
    )
  }

}
