import { Component, Input } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss']
})
export class SolicitacaoComponent {
  @Input() numeroOS?: string ;
  @Input() solicitante?: string;

  modalSwitch: boolean = false;

  constructor(private modalSS: SwitchService) {}

  ngOnInit(){
    // executando observable
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor}); 
  }

  openModal(){
    this.modalSwitch = true;
  }          
}
