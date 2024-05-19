import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-filtro',
  templateUrl: './botao-filtro.component.html',
  styleUrls: ['./botao-filtro.component.scss']
})
export class BotaoFiltroComponent {
  @Input()
  descricao!: string;
  selecionado: boolean = false;

  onClick() {
    this.selecionado = true; // Define o botão atual como selecionado

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
