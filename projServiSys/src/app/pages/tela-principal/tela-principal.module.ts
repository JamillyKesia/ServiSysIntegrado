import { NgModule, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { TabelaOrdensComponent } from './../../components/tabela-ordens/tabela-ordens.component';
import { BotaoMenuComponent } from "src/app/components/botao-menu/botao-menu.component"; 
import { MenuLateralComponent } from "src/app/components/menu-lateral/menu-lateral.component";
import { MenuSuperiorComponent } from "src/app/components/menu-superior/menu-superior.component";
import { HomeComponent } from "../home/home.component";
import { TelaPrincipalRotas } from "./tela-principal.routes";
import { TelaPrincipalComponent } from "./tela-principal.component";
import { NovaOrdemFuncComponent } from '../nova-ordem-func/nova-ordem-func.component';
import { FormNovaOsComponent } from 'src/app/components/form-nova-os/form-nova-os.component';
import { SuasOrdensFuncComponent } from "../suas-ordens-func/suas-ordens-func.component";
import { BotaoFiltroComponent } from "src/app/components/botao-filtro/botao-filtro.component";
import { ModalOsComponent } from "src/app/components/modal-os/modal-os.component";
//import { BotaoMenuCoordComponent } from "src/app/components/Coordenador-TI/botao-menu-coord/botao-menu-coord.component";
//import { SolicitacaoComponent } from "src/app/components/Coordenador-TI/solicitacao/solicitacao.component";
import { ModalComponent } from "src/app/components/modal/modal.component";
import { HomeCpdComponent } from "../CPD/home-cpd/home-cpd.component";
import { ManutencoesCpdComponent } from "../CPD/manutencoes-cpd/manutencoes-cpd.component";
import { OsCpdComponent } from "../CPD/os-cpd/os-cpd.component";
import { BotaoMenuCoordComponent } from "src/app/components/Coordenador-TI/botao-menu-coord/botao-menu-coord.component";
import { SolicitacaoComponent } from "src/app/components/Coordenador-TI/solicitacao/solicitacao.component";
import { HomeCoordComponent } from "../Coordenador-TI/home-coord/home-coord.component";
import { SuasAprovacoesComponent } from "../Coordenador-TI/suas-aprovacoes/suas-aprovacoes.component";
import { AprovPendentesComponent } from "../Coordenador-TI/aprov-pendentes/aprov-pendentes.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroAdminComponent } from "../CPD/cadastro-admin/cadastro-admin.component";
@NgModule({
    declarations: [
        TelaPrincipalComponent,
        BotaoMenuComponent,
        MenuLateralComponent,
        MenuSuperiorComponent,
        HomeComponent,
        TabelaOrdensComponent,
        NovaOrdemFuncComponent,
        FormNovaOsComponent,
        SuasOrdensFuncComponent,
        BotaoFiltroComponent,
        ModalComponent,
        ModalOsComponent,
        
        HomeCoordComponent,
        AprovPendentesComponent,
        SuasAprovacoesComponent, 
        BotaoMenuCoordComponent,
        SolicitacaoComponent,
        CadastroAdminComponent,

        HomeCpdComponent,
        ManutencoesCpdComponent,
        OsCpdComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(TelaPrincipalRotas),
        FormsModule,
        FormsModule, // Se estiver usando template-driven forms
        ReactiveFormsModule // Se estiver usando reactive forms
    ]
})

export class TelaPrincipalModule{

}