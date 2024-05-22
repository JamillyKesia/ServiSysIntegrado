import { Component, Input, Output, EventEmitter } from '@angular/core';
import { catchError } from 'rxjs';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { OrdemService } from 'src/app/services/ordem.service';
import { SwitchService } from 'src/app/services/switch.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-tabela-ordens',
  templateUrl: './tabela-ordens.component.html',
  styleUrls: ['./tabela-ordens.component.scss']
})
export class TabelaOrdensComponent {

  modalSwitch: boolean = false;
  public ordens: any = [];
  public ordensFiltradas: any = [];

  private _filtrosLista: string = '';

  public get filtroLista(): string{
    return this._filtrosLista;
  }

  public set filtroLista(value: string){
    this._filtrosLista = value;
    this.ordensFiltradas = this.filtroLista ? this.filtrarOrdens(this.filtroLista) : this.ordens;
  }

  filtrarOrdens(filtrarPor: string):any{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.ordens.filter( //o tema é oq vc vai filtrar, mudar pelo certo
      (ordem: { tema: string; }) => ordem.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 /*||
      ordem.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1*/
    )
  }

  constructor(

    private modalSS: SwitchService,
    private ordemService: OrdemService) {
      // console.log('TO AQUI', environment.api)
      //this.obterOrdensCadastradas();
  }

  ngOnInit(){
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor}); 
    this.obterOrdens();
  }

  openModel2(){
    this.modalSwitch = true;
  }

  public obterOrdens(): void {
    this.ordemService.obterOrdem().subscribe(
      (_ordens: OrdemServico[]) => {
      this.ordens = _ordens;
      this.ordensFiltradas = _ordens;
      //this.ordensFiltradas = this.ordens;
      },
      error => console.log(error)
    );

    /*this.http.get<any[]>('http://localhost:5124/api/OrdemServico')
    .pipe(
      catchError(error => {
        console.error('Erro na requisição:', error);
        throw 'Erro ao obter as ordens cadastradas. Por favor, tente novamente mais tarde.';
      })
    )
    .subscribe({
      next: (response: any[]) => {
        this.ordens = response;
        console.log('Ordens cadastradas:', this.ordens);
      },
      error: (error: any) => {
        console.error('Erro na requisição:', error);
        // Trate o erro aqui conforme necessário
      }
    });*/

    // this.apiService.obterOrdem().
    // subscribe(ordens => this.ordens = ordens)
    //this.ordens = this.ordemService.obterOrdem();
  }

}
