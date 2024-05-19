import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suas-aprovacoes',
  templateUrl: './suas-aprovacoes.component.html',
  styleUrls: ['./suas-aprovacoes.component.scss']
})
export class SuasAprovacoesComponent {

  @Input() ordens: any[] = [
    { id: 'OS4568SA', status: 'Aprovada', data: '14-09-2023' },
    { id: 'OS4567SA', status: 'Aprovada', data: '11-07-2023' },
    { id: 'OS4566SA', status: 'Rejeitada', data: '27-06-2023' },
    { id: 'OS4565SA', status: 'Aprovada', data: '11-03-2023' }
  ];
}
