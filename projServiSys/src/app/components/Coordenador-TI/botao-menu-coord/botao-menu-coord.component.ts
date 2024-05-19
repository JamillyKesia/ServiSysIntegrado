import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-menu-coord',
  templateUrl: './botao-menu-coord.component.html',
  styleUrls: ['./botao-menu-coord.component.scss']
})
export class BotaoMenuCoordComponent {
  @Input() selecionado: boolean = false;
  @Input() descricao: string = '';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
