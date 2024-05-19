import { Component, OnInit, Input, Output } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(private modalSS: SwitchService) { }

  @Input() modalVisible: boolean = false; // Recebe a variável modalVisible do componente pai

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

}