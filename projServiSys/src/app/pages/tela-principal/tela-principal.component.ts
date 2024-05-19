import { Component, TemplateRef } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent {
  
  modalSwitch: boolean = false;

  constructor(private modalSS: SwitchService) {

  }

  ngOnInit(){
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor}); 
  }

  openModel(){
    this.modalSwitch = true;
  }

}
