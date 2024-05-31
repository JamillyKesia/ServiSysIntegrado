import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { OrdemService } from 'src/app/services/ordem.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-nova-os',
  templateUrl: './form-nova-os.component.html',
  styleUrls: ['./form-nova-os.component.scss']
})
export class FormNovaOsComponent {
  
  modalSwitch: boolean = false;
  //formulario: any = {};
/*
  id: number = 0;
  dataOrdemServico: Date = new Date();
  descricaoProblema: string = '';
  aprovada: boolean = false;
  localEquipamento: string = '';
  tipoEquipamento: string = '';
  serialEquipamento: string = '';
  userId: number = 0;
  user: User | undefined;
*/


  constructor(
    private modalSS: SwitchService,
     private ordemService: OrdemService
     ) {

     }

  ngOnInit(){
    // executando observable
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor}); 
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


 // openModel(){
   /* // Verifica se todos os campos obrigatórios foram preenchidos
    if (this.local.trim() === '' && this.tipo.trim() === '' && this.posicao.trim() === '' 
    && this.serial.trim() === '' &&    this.descricao.trim() === ''){
      alert("Por favor, preencha todos os campos."); // Caso contrário, exibe um alerta
    } else {
      this.modalSwitch = true; // Abre o modal se todos os campos estiverem preenchidos
    }*/
  //}


  /*
   modalVisible = false;

   openModal() {
     this.modalVisible = true;
     document.getElementById('myModal')!.style.display = 'block'; // Exibe o modal
   }
 
   closeModal() {
     this.modalVisible = false;
     document.getElementById('myModal')!.style.display = 'none'; // Oculta o modal
   }
 
   onSubmit(form: any) {
     if (form.valid) {
       this.openModal();
     }
   }
  */
}
