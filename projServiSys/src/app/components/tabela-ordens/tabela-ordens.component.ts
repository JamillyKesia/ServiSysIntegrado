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

  public ordens: OrdemServico[] = [];
  public ordensFiltradas: OrdemServico[] = [];

  private _filtrosListado: string = '';

  public get filtroLista(): string{
    return this._filtrosListado;
  }

  public set filtroLista(value: string){
    this._filtrosListado = value;
    this.ordensFiltradas = this.filtroLista ? this.filtrarOrdens(this.filtroLista) : this.ordens;
  }

  // public filtrarOrdens(filtrarPor: string):any{
  //   filtrarPor = filtrarPor.toLocaleLowerCase();
  //   return this.ordens.filter( //o tema é oq vc vai filtrar, mudar pelo certo
  //   ordem.id.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
  //   ordem.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
  //     //(ordem: { tema: string; }) => ordem.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 
  //     //||
  //     //ordem.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
  //   );
  // }

  public filtrarOrdens(filtrarPor: string): OrdemServico[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.ordens.filter(
      ordem => ordem.descricaoProblema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 
    );
  }
  
  constructor(

    private modalSS: SwitchService,
    private ordemService: OrdemService) {
      // console.log('TO AQUI', environment.api)
      //this.obterOrdensCadastradas();
  }

  public ngOnInit(){
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor}); 
    this.GetOrdemServico();
  }

  public openModel2(){
    this.modalSwitch = true;
  }

  public GetOrdemServico(): void {
    this.ordemService.GetOrdemServico().subscribe({
      next: (ordens: OrdemServico[]) => {
      this.ordens = ordens;
      this.ordensFiltradas = this.ordens;
      },
      error: (error:any) => console.log(error)
    });
  }
}
