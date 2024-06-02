import { EventEmitter, Injectable } from '@angular/core';
import { OrdemServico } from '../models/ordem-servico';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  patchValue(ordens: OrdemServico) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  $modal = new EventEmitter<any>();
}
