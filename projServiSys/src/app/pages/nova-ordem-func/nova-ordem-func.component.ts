import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidatorField } from 'src/app/helpers/validator-field';
import { EstadoOrdemServicoEnum } from 'src/app/models/estado-ordem-servico-enum';
import { Lancamento } from 'src/app/models/lancamento';
import { OrdemEquipamento } from 'src/app/models/ordem-equipamento';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { User } from 'src/app/models/user';
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


  /*id: number = 0;
  dataOrdemServico: Date = new Date();
  descricaoProblema: string = '';
  aprovada: boolean = false;
  localEquipamento: string = '';
  tipoEquipamento: string = '';
  serialEquipamento: string = '';
  estadoOrdemServico: EstadoOrdemServicoEnum | undefined;
  userId: number = 0;
  user: User | undefined;
  ordemEquipamentos?: OrdemEquipamento[];
  lancamentos?: Lancamento[];*/
  
  constructor(
  private modalSS: SwitchService,
  private ordemService: OrdemService,
  private fb: FormBuilder) {}

  ngOnInit(): void{
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor}); 
    this.validation();
  }

  openModal(){
    this.modalSwitch = true;
  }

  //ordens  : Ordem[] = []
  ordens = new Observable<OrdemServico[]>();


  cadastrarOrdem(){
   /* if(!this.localEquipamento || !this.tipoEquipamento)
      return;

    this.OrdemServico.cadastrarOrdem({ 
      id: this.id,
      dataOrdemServico: this.dataOrdemServico,
      descricaoProblema: this.descricaoProblema,
      aprovada: this.aprovada,
      localEquipamento: this.localEquipamento,
      tipoEquipamento: this.tipoEquipamento,
      serialEquipamento: this.serialEquipamento,
      estadoOrdemServico: this.estadoOrdemServico,
      userId: this.userId,
      user: this.user })
    .subscribe(_ => this.obterOrdensCadastradas())*/
  }

  obterOrdensCadastradas(){ 
    // Substitua 'this.ordem = response' pela atribuição correta à variável 'ordens$'
    this.ordens = this.ordemService.GetOrdemServico();
  }

  get fn(): any {
      return this.formNO.controls;
  }

  public validation(): void {

    this.formNO = this.fb.group({
      localEquipamento: ['', Validators.required],
      tipoEquipamento: ['', Validators.required],
      serialEquipamento: ['',[Validators.required, Validators.minLength(4)]],
      descricaoProblema: ['', [Validators.required]],
    });
  }

  
}
