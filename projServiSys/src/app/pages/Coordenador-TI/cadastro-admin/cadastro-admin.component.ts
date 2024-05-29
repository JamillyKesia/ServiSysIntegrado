import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from 'src/app/helpers/validator-field';


@Component({
  selector: 'app-cadastro-admin',
  templateUrl: './cadastro-admin.component.html',
  styleUrls: ['./cadastro-admin.component.scss']
})
export class CadastroAdminComponent implements OnInit {
  
  form!: FormGroup;

  constructor(public fb: FormBuilder) { }

  get f(): any { return this.form.controls; }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', 
        [Validators.required, Validators.email]
      ],
      userName: ['', [
        Validators.required,
        Validators.minLength(4),
      ]],
      senha: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
      ]],
      confirmeSenha: ['', [
        Validators.required
      ]],
      tipoUser: ['', Validators.required],
      cargo: ['', Validators.required]
    }, formOptions);
  }

  public cssValidator(campoForm: FormControl): any {
    return {'is-invalid': campoForm.errors && campoForm.touched};
  }

}
