import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao-filtro',
  templateUrl: './botao-filtro.component.html',
  styleUrls: ['./botao-filtro.component.scss']
})
export class BotaoFiltroComponent {
  /*@Input()
  descricao!: string;
  selecionado: boolean = false;*/

  @Input() descricao: string;
  @Input() rota: string;
  @Input() selecionado: boolean;
  @Output() buttonClick = new EventEmitter<void>();

  constructor(private router: Router) {
    this.descricao = '';
    this.rota = '';
    this.selecionado = false;
  }

  navigate() {
    this.router.navigate([this.rota]);
    this.buttonClick.emit();
  }

  // Método para ativar o botão
  activeButton(): void {
    this.selecionado = true;
  }

  // Método para definir o estado do botão (ativo/desativado)
  setActiveButton(status: boolean): void {
    this.selecionado = status;
  }

   onClick() {
    //this.selecionado = true; // Define o botão atual como selecionado

    // Desseleciona os outros botões
   /* const botaoClicado = event.currentTarget as HTMLElement;
    const botoes = botaoClicado.parentElement.querySelectorAll('.bt1');
    botoes.forEach(botao => {
      if (botao !== botaoClicado) {
        botao.classList.remove('selecionado');
      }
    });*/
  }
}
