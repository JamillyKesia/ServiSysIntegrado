import { Component, Input } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';


@Component({
  selector: 'app-modal-os',
  templateUrl: './modal-os.component.html',
  styleUrls: ['./modal-os.component.scss']
})
export class ModalOsComponent {
  constructor(private modalSS: SwitchService) { }

  closeModal2(){
    this.modalSS.$modal.emit(false);
  }

  @Input() ordemDeServico: any = { 
    id: 'Ordem de serviço #OS4568SA', 
    local: 'Laboratório de informática 07', 
    data: '14-09-2023', 
    tipo: 'Computador', 
    status: 'Em andamento',
    posicao: 'Mesa 04', 
    serial: '-', 
    descricao: 'O computador não está ligando e ouve bips'
  };

}
