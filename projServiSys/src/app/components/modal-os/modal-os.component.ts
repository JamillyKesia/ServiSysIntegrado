import { OrdemService } from './../../services/ordem.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { SwitchService } from 'src/app/services/switch.service';


@Component({
  selector: 'app-modal-os',
  templateUrl: './modal-os.component.html',
  styleUrls: ['./modal-os.component.scss']
})
export class ModalOsComponent {

  //ordem = {} as OrdemServico;
  @Input() ordem: OrdemServico | any = {};

  constructor(
    private modalSS: SwitchService,
    private router: ActivatedRoute,
    private ordemService: OrdemService
  ) { }

  ngOnInit(): void{
    this.carregarOrdem();
  }

  closeModal2(){
    this.modalSS.$modal.emit(false);
  }
  

  //carrega os detalhes de uma ordem de serviço com base em um ID passado como parâmetro na rota
  public carregarOrdem(): void {
    const ordemIdParam = this.router.snapshot.paramMap.get('id');
  

    if (ordemIdParam !== null){
      this.ordemService.GetOrdemServicoById(+ordemIdParam).subscribe(
        (ordem: OrdemServico) => {
          this.ordem = {... ordem}; //pega as propriedades do obj OrdemServico e atribui os itens pra ordem
          //this.modal.patchValue(this.ordem);
        },
        (error: any) => {
          console.error(error);
        },
        () => {},
      )
    }
  }

}
