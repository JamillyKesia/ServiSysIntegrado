import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidatorField } from 'src/app/helpers/validator-field';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { OrdemService } from 'src/app/services/ordem.service';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-nova-ordem-func',
  templateUrl: './nova-ordem-func.component.html',
  styleUrls: ['./nova-ordem-func.component.scss']
})
export class NovaOrdemFuncComponent {

  condicao1: boolean = true;
  modalSwitch: boolean = false;
  formNO!: FormGroup;
  //ordens = new Observable<OrdemServico[]>();

  ordens = {} as OrdemServico;
  modalMessage: string = '';

  //ordens  : Ordem[] = []
  //get f(): any { return this.form.controls; }
  
  constructor(
  private modalSS: SwitchService,
  private ordemService: OrdemService,
  private fb: FormBuilder) {}

  ngOnInit(): void{
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor}); 
    this.validation();
  }

  get fn(): any {
    return this.formNO.controls;
  }

  private validation(): void {

    this.formNO = this.fb.group({
      localEquipamento: ['', Validators.required],
      tipoEquipamento: ['', Validators.required],
      serialEquipamento: ['',[Validators.required, Validators.minLength(4)]],
      posicaoEquipamento: ['', Validators.required],
      descricaoProblema: ['', [Validators.required]],
    });
  }

  public resetForm(): void {
    this.formNO.reset();
  }

  public cssValidator(campoForm: FormControl): any {
    return {'is-invalid': campoForm.errors && campoForm.touched};
  }

  //salvar ordens com api
  public salvarAlteracao(): void {
    if(this.formNO.valid){
      console.log('Entrei no if');

      this.ordens = {... this.formNO.value};

      this.ordemService.PostOrdemServico(this.ordens).subscribe(
        () => {
        this.modalMessage = 'Evento salvo com sucesso!';
        this.openModal();
        },
        (error: any) =>{
          console.error(error);
          this.modalMessage = 'Erro ao salvar evento';
          this.openModal(); //fazer modal de erro
        }

        
      );

      /*this.ordemService.PutOrdemServico(this.ordens.id, this.ordens).subscribe(
        () => {
        //this.modalMessage = 'Evento salvo com sucesso!';
        this.openModal();
        },
        (error: any) =>{
          console.error(error);
          //this.modalMessage = 'Erro ao salvar evento';
          this.openModal();
        }
      );*/

    }
  }

  openModal(){
    this.modalSwitch = true;
  }

  // closeModal(): void {
  //   this.modalSwitch = false;
  // }


}
