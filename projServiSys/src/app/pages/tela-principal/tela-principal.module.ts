import { NgModule, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { BotaoMenuComponent } from "src/app/components/botao-menu/botao-menu.component"; 
import { MenuLateralComponent } from "src/app/components/menu-lateral/menu-lateral.component";
import { MenuSuperiorComponent } from "src/app/components/menu-superior/menu-superior.component";
import { HomeComponent } from "../funcionario/home/home.component";
import { TelaPrincipalRotas } from "./tela-principal.routes";
import { TelaPrincipalComponent } from "./tela-principal.component";
import { NovaOrdemFuncComponent } from '../funcionario/nova-ordem-func/nova-ordem-func.component';
import { SuasOrdensFuncComponent } from "../funcionario/suas-ordens-func/suas-ordens-func.component";
import { ModalOsComponent } from "src/app/components/modal-os/modal-os.component";
import { ModalComponent } from "src/app/components/modal/modal.component";
import { HomeCpdComponent } from "../CPD/home-cpd/home-cpd.component";
import { ManutencoesCpdComponent } from "../CPD/manutencoes-cpd/manutencoes-cpd.component";
import { OsCpdComponent } from "../CPD/os-cpd/os-cpd.component";
import { BotaoMenuCoordComponent } from "src/app/components/Coordenador-TI/botao-menu-coord/botao-menu-coord.component";
import { SolicitacaoComponent } from "src/app/components/Coordenador-TI/solicitacao/solicitacao.component";
import { HomeCoordComponent } from "../Coordenador-TI/home-coord/home-coord.component";
import { SuasAprovacoesComponent } from "../Coordenador-TI/suas-aprovacoes/suas-aprovacoes.component";
import { AprovPendentesComponent } from "../Coordenador-TI/aprov-pendentes/aprov-pendentes.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DateTimeFormatPipe } from "src/app/helpers/date-time-format.pipe";
import { LoginComponent } from "../login/login.component";
import { LoginCPDComponent } from "../login/CPD/login-cpd/login-cpd.component";
import { LoginCoordenadorComponent } from "../login/Coordenador-TI/login-coordenador/login-coordenador.component";
import { RegistrationComponent } from "../Coordenador-TI/registration/registration.component";

@NgModule({
    declarations: [
        LoginComponent,
        LoginCPDComponent,
        LoginCoordenadorComponent,

        TelaPrincipalComponent,
        BotaoMenuComponent,
        MenuLateralComponent,
        MenuSuperiorComponent,
        HomeComponent,
        NovaOrdemFuncComponent,
        SuasOrdensFuncComponent,
        ModalComponent,
        ModalOsComponent,
        DateTimeFormatPipe,
        
        HomeCoordComponent,
        AprovPendentesComponent,
        SuasAprovacoesComponent, 
        BotaoMenuCoordComponent,
        SolicitacaoComponent,
        RegistrationComponent,

        HomeCpdComponent,
        ManutencoesCpdComponent,
        OsCpdComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(TelaPrincipalRotas),
        FormsModule,
        ReactiveFormsModule
    ]
})

export class TelaPrincipalModule{

}