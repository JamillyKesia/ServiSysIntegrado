import { Component ,Input } from '@angular/core';
import { BotaoFiltroComponent } from 'src/app/components/botao-filtro/botao-filtro.component';

@Component({
  selector: 'app-suas-ordens-func',
  templateUrl: './suas-ordens-func.component.html',
  styleUrls: ['./suas-ordens-func.component.scss']
})
export class SuasOrdensFuncComponent {

outraMatrizDeItens: any;
botaoSelecionado: number = 0;

  ordemSelecionada: any = null;

  constructor() { }

  @Input() ordens: any[] = [
    { id: 'OS4568SA', status: 'Em andamento', data: '14-09-2023' },
    { id: 'OS4567SA', status: 'Concluída', data: '11-07-2023' },
    { id: 'OS4566SA', status: 'Rejeitado', data: '27-06-2023' },
    { id: 'OS4565SA', status: 'Em análise', data: '11-03-2023' }
  ];

  selecionarBotao(opcao: number) {
    // Limpar a ordem selecionada quando um botão é clicado
    this.ordemSelecionada = null;

    // Lógica para selecionar a opção do botão
    if (opcao === 1) {
      // Todas as ordens
      // Por exemplo, atribuir todas as ordens para a variável this.ordens
      // Supondo que você tenha uma função para obter todas as ordens do serviço
      this.ordens = this.obterTodasAsOrdens();
    } else if (opcao === 2) {
      // Ordens concluídas
      // Por exemplo, filtrar as ordens concluídas e atribuir à variável this.ordens
      // Supondo que você tenha uma função para obter as ordens concluídas
      this.ordens = this.filtrarOrdensConcluidas();
    } else if (opcao === 3) {
      // Ordens rejeitadas
      // Por exemplo, filtrar as ordens rejeitadas e atribuir à variável this.ordens
      // Supondo que você tenha uma função para obter as ordens rejeitadas
      this.ordens = this.filtrarOrdensRejeitadas();
    }
  }


  // Exemplo de função para obter todas as ordens de serviço
  obterTodasAsOrdens(): any[] {
    // Implemente a lógica para obter todas as ordens de serviço
    // Por exemplo, você pode fazer uma chamada a uma API para obter as ordens
    // Suponha que ordens seja uma lista de objetos contendo as informações de cada ordem de serviço
    return this.ordens.filter(ordem => ordem.status === 'Todas as ordens');;
  }

  // Exemplo de função para filtrar as ordens concluídas
  filtrarOrdensConcluidas(): any[] {
    // Implemente a lógica para filtrar as ordens concluídas
    // Por exemplo, você pode filtrar a lista de ordens para obter apenas as concluídas
    // Suponha que ordens seja uma lista de objetos contendo as informações de cada ordem de serviço
    return this.ordens.filter(ordem => ordem.status === 'Concluída');
  }

  // Exemplo de função para filtrar as ordens rejeitadas
  filtrarOrdensRejeitadas(): any[] {
    // Implemente a lógica para filtrar as ordens rejeitadas
    // Por exemplo, você pode filtrar a lista de ordens para obter apenas as rejeitadas
    // Suponha que ordens seja uma lista de objetos contendo as informações de cada ordem de serviço
    return this.ordens.filter(ordem => ordem.status === 'Rejeitada');
  }
  

  


}
