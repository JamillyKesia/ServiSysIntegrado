import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { OrdemServico } from '../models/ordem-servico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  baseURL = 'http://localhost:5124/api/OrdemServico';

  constructor(private http: HttpClient) {}

  public GetOrdemServico(): Observable<OrdemServico[]>{
    return this.http.get<OrdemServico[]>(this.baseURL);
  }

  public GetOrdemServicoByUsuario(idUsuario: number): Observable<OrdemServico[]>  {
    return this.http.get<OrdemServico[]>(`${this.baseURL}/usuario/${idUsuario}`);
  }

  public GetOrdemServicoById(id: number): Observable<OrdemServico>{
    return this.http.get<OrdemServico>(`${this.baseURL}/${id}`);
  }

  public PostOrdemServico(ordens: OrdemServico): Observable<OrdemServico>{
    return this.http.post<OrdemServico>(this.baseURL, ordens);
  }

  public PutOrdemServico(id: number, ordens: OrdemServico): Observable<OrdemServico>{
    return this.http.put<OrdemServico>(`${this.baseURL}${id}`,ordens);
  }

  public PatchOrdemServico(id: number, changes: Partial<OrdemServico>): Observable<any> {
    return this.http.patch(`${this.baseURL}/Aprovado/${id}`, changes);
  }

}