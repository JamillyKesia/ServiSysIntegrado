import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrls: ['./botao-menu.component.scss']
})
export class BotaoMenuComponent {
 /* @Input()
  descricao = '';

  @Input()
  selecionado = false;

  @Output()
  click = new EventEmitter<void>;

  onClick(){
    this.click.emit();
  }*/

  @Input() selecionado: boolean = false;
  @Input() descricao: string = '';
  @Input() iconClass: string | undefined ;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }

  botaoSelecionado: string | null = null;

  selecionarBotao(botao: string): void {
    this.botaoSelecionado = botao;
  }

  desselecionarBotoes(): void {
    this.botaoSelecionado = null;
  }
}
