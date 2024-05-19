import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    const formOptions: AbstractControlOptions ={
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group({
      primeiroNome:['', Validators.required],
      ultimoNome:['', Validators.required],
      email:['', 
      [Validators.required, Validators.minLength(6)]
      ],
      userName:['', Validators.required],
      senha:['', Validators.required],
      confirmeSenha:['', Validators.required],
      tipoUser:['', Validators.required]
    }, formOptions);
  }

  

}
