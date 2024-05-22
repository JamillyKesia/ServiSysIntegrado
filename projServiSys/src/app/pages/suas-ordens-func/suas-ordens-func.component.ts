import { Component, Input, OnInit } from '@angular/core';
import { BotaoFiltroComponent } from 'src/app/components/botao-filtro/botao-filtro.component';

@Component({
  selector: 'app-suas-ordens-func',
  templateUrl: './suas-ordens-func.component.html',
  styleUrls: ['./suas-ordens-func.component.scss']
})
export class SuasOrdensFuncComponent implements OnInit {
  @Input() ordens: any[] = [
    { id: 'OS4568SA', status: 'Em andamento', data: '14-09-2023' },
    { id: 'OS4567SA', status: 'Concluída', data: '11-07-2023' },
    { id: 'OS4566SA', status: 'Rejeitado', data: '27-06-2023' },
    { id: 'OS4565SA', status: 'Em análise', data: '11-03-2023' }
  ];

  botaoSelecionado: number = 0;
  ordemSelecionada: any = null;

  constructor() { }

  ngOnInit(): void {
    // Inicialização de dados ou lógica aqui, se necessário
  }

  selecionarBotao(opcao: number): void {
    // Limpar a ordem selecionada quando um botão é clicado
    this.ordemSelecionada = null;

    // Lógica para selecionar a opção do botão
    if (opcao === 1) {
      // Todas as ordens
      this.ordens = this.obterTodasAsOrdens();
    } else if (opcao === 2) {
      // Ordens concluídas
      this.ordens = this.filtrarOrdensConcluidas();
    } else if (opcao === 3) {
      // Ordens rejeitadas
      this.ordens = this.filtrarOrdensRejeitadas();
    }
  }

  obterTodasAsOrdens(): any[] {
    return this.ordens; // Implemente a lógica adequada aqui
  }

  filtrarOrdensConcluidas(): any[] {
    return this.ordens.filter(ordem => ordem.status === 'Concluída');
  }

  filtrarOrdensRejeitadas(): any[] {
    return this.ordens.filter(ordem => ordem.status === 'Rejeitado');
  }

  // Método para ativar o botão
  activeButton(botao: BotaoFiltroComponent): void {
    botao.activeButton();
  }

  // Método para definir o estado do botão (ativo/desativado)
  setActiveButton(botao: BotaoFiltroComponent, status: boolean): void {
    botao.setActiveButton(status);
  }
}
