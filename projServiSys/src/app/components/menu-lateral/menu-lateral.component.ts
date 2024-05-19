import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {

  menuSelecionado = 'Nova ordem';

  botao1FuncVisivel: boolean = true;
  botao2FuncVisivel: boolean = true;

  botao1CoordVisivel: boolean = false;
  botao2CoordVisivel: boolean = false;

  botao1CPDVisivel: boolean = false;
  botao2CPDVisivel: boolean = false;

  // mostrarBotaoNovaOrdem: boolean = true;
  // mostrarBotaoSuasOrdens: boolean = true;

  rotaAtual: string = ''; // Variável para armazenar a rota atual
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Inicializa a rota atual quando o componente é carregado
    this.rotaAtual = this.activatedRoute.snapshot.url.join('/');

    //ouvindo eventos de navegação (NavigationEnd) quando a rota é alterada
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Atualiza a rota atual com base na rota atual do aplicativo
        this.rotaAtual = event.urlAfterRedirects;
        console.log('Rota Atual:', this.rotaAtual); // Iss o vai imprimir a rota atual no console do navegador

        // Verifica a rota atual e atualiza a visibilidade dos botões
        if (this.rotaAtual === '/principal/home' || this.rotaAtual === '/principal/nova-ordem' || this.rotaAtual === '/principal/suas-ordens') {
          this.botao1FuncVisivel = true;
          this.botao2FuncVisivel = true;

          this.botao1CoordVisivel = false;
          this.botao2CoordVisivel = false;

          this.botao1CPDVisivel = false;
          this.botao2CPDVisivel = false;

          console.log('Rota 1');

        } else if (this.rotaAtual === '/principal/home-coord' || this.rotaAtual === '/principal/aprovacoes' || this.rotaAtual === '/principal/suas-aprovacoes') {
          this.botao1FuncVisivel = false;
          this.botao2FuncVisivel = false;

          this.botao1CoordVisivel = true;
          this.botao2CoordVisivel = true;

          this.botao1CPDVisivel = false;
          this.botao2CPDVisivel = false;

          console.log('Rota 2');

        } if (this.rotaAtual === '/principal/os-cpd' || this.rotaAtual === '/principal/manutencoes') {
          this.botao1FuncVisivel = false;
          this.botao2FuncVisivel = false;

          this.botao1CoordVisivel = false;
          this.botao2CoordVisivel = false;

          this.botao1CPDVisivel = true;
          this.botao2CPDVisivel = true;

          console.log('Rota 3');
        }
      }
    });
  }

  botaoClick(botao: string){ //recebe qual botão foi clicado
    this.menuSelecionado = botao;
  }

  isSelected: boolean = false;

  onButtonClicked() {
    this.isSelected = !this.isSelected;
  }

  /*botão selecionado*/
  botaoSelecionado: string | null = null;

  selecionarBotao(botao: string): void {
    this.botaoSelecionado = botao;
  }

  desselecionarBotoes(): void {
    this.botaoSelecionado = null;
  }



}
