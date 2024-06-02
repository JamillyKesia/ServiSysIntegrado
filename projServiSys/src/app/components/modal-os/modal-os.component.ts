import { OrdemService } from './../../services/ordem.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { SwitchService } from 'src/app/services/switch.service';
import { OrdemCompartilhadaService } from 'src/app/services/ordem-compartilhada.service';

@Component({
  selector: 'app-modal-os',
  templateUrl: './modal-os.component.html',
  styleUrls: ['./modal-os.component.scss']
})
export class ModalOsComponent {

  ordens = {} as OrdemServico;
  //@Input() ordem: OrdemServico | any = {};

  constructor(
    private modalSS: SwitchService,
    private router: ActivatedRoute,
    private ordemService: OrdemService,
    private ordemCompartilhadaService: OrdemCompartilhadaService
  ) { }

  ngOnInit(): void{
    this.carregarOrdem();
    this.ordemCompartilhadaService.ordemAtual.subscribe(ordens => {
      if (ordens) {
        this.ordens = ordens;
      }
    });
  }

  closeModal2(){
    this.modalSS.$modal.emit(false);
  }
  

  //carrega os detalhes de uma ordem de serviço com base em um ID passado como parâmetro na rota
  public carregarOrdem(): void {
    const ordemIdParam = this.router.snapshot.paramMap.get('id');
  
    if (ordemIdParam !== null){
      this.ordemService.GetOrdemServicoById(+ordemIdParam).subscribe(
        (ordens: OrdemServico) => {
          this.ordens = {... ordens}; //pega as propriedades do obj OrdemServico e atribui os itens pra ordem
        },
        (error: any) => {
          console.error(error);
        },
        () => {},
      )
    }
  }
}
