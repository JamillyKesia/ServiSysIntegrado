import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { OrdemServico } from '../models/ordem-servico';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  private getOrdem = `${environment.api}/api/OrdemServico`;
  private postOrdem = `${environment.api}/api/OrdemServico`;
  private getIdOrdem = `${environment.api}/api/OrdemServico/{id}`;
  private putOrdem = `${environment.api}/api/OrdemServico/{id}`;
  private getUserOrdem = `${environment.api}/api/OrdemServico/usuario/{idUsuario}`;
  private patchIdOrdem = `${environment.api}/api/OrdemServico/Aprovado/{id}`;

  constructor(private http: HttpClient) {
  }

  obterOrdem(){
    return this.http.get<OrdemServico[]>(this.getOrdem);
  }

  cadastrarOrdem(ordens: OrdemServico){
    return this.http.post<User>(this.postOrdem,ordens);
  }

  obterIdOrdem(){
    return this.http.get<OrdemServico[]>(this.getIdOrdem);
  }

  atualizarOrdem(ordens: OrdemServico){
    return this.http.put<OrdemServico>(this.putOrdem,ordens);
  }

  obterUserOrdem(){
    return this.http.get<OrdemServico[]>(this.getUserOrdem);
  }

  //patch
  alteraOrdem(ordens: OrdemServico){
   // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<OrdemServico[]>(this.patchIdOrdem, ordens);
  }

}
