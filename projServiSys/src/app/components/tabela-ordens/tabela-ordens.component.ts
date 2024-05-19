import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { catchError } from 'rxjs';
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

  constructor(
    private modalSS: SwitchService,
    private http: HttpClient
  ) {
      // console.log('TO AQUI', environment.api)
      //this.obterOrdensCadastradas();
  }

  ngOnInit(){
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor}); 
    this.obterOrdensCadastradas();
  }

  openModel2(){
    this.modalSwitch = true;
  }

  public obterOrdensCadastradas(): void {
    this.http.get('http://localhost:5124/api/OrdemServico').subscribe(
      response => this.ordens = <any[]>response,
      error => console.log(error)
    );

    /*this.http.get<any[]>('https://projservisys.azurewebsites.net/api/OrdemServico')
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
