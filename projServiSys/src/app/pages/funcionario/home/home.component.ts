import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { OrdemService } from 'src/app/services/ordem.service';
import { SwitchService } from 'src/app/services/switch.service';
import { OrdemCompartilhadaService } from 'src/app/services/ordem-compartilhada.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
      private ordemService: OrdemService,
      private ordemCompartilhadaService: OrdemCompartilhadaService
  ) {
      // console.log('TO AQUI', environment.api)
      //this.obterOrdensCadastradas();
  }

  public ngOnInit(){
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor}); 
    this.GetOrdemServico();
  }

  public openModel2(id: number){
    const ordem = this.ordens.find(o => o.id === id);
    if (ordem) {
      this.ordemCompartilhadaService.mudarOrdem(ordem);
      this.modalSwitch = true;
    }
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
