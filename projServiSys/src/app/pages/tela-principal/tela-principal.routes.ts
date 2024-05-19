import { Routes} from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";
import { TelaPrincipalComponent } from "./tela-principal.component";
import { HomeComponent } from "../home/home.component";
import { NovaOrdemFuncComponent } from "../nova-ordem-func/nova-ordem-func.component";
import { SuasOrdensFuncComponent } from "../suas-ordens-func/suas-ordens-func.component";
import { HomeCpdComponent } from "../CPD/home-cpd/home-cpd.component";
import { OsCpdComponent } from "../CPD/os-cpd/os-cpd.component";
import { ManutencoesCpdComponent } from "../CPD/manutencoes-cpd/manutencoes-cpd.component";
import { HomeCoordComponent } from "../Coordenador-TI/home-coord/home-coord.component";
import { AprovPendentesComponent } from "../Coordenador-TI/aprov-pendentes/aprov-pendentes.component";
import { SuasAprovacoesComponent } from "../Coordenador-TI/suas-aprovacoes/suas-aprovacoes.component";
import { authFuncionarioGuard } from "src/app/_guard/auth-funcionario.guard";
import { authCoordGuard } from "src/app/_guard/auth-coord.guard";
import { authCpdGuard } from "src/app/_guard/auth-cpd.guard";
import { CadastroAdminComponent } from "../CPD/cadastro-admin/cadastro-admin.component";

//import { autorizadoGuard } from "src/app/_guard/autorizado.guard";

export const TelaPrincipalRotas: Routes = [
    {
        path: '',
        component: TelaPrincipalComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                //canActivate: [authFuncionarioGuard],
                data: { tipoUsuario: 'funcionario' } // Info sobre o tipo de usuário
            },
            {
                path: 'nova-ordem',
                component: NovaOrdemFuncComponent,
                //canActivate: [authFuncionarioGuard],
                data: { tipoUsuario: 'funcionario' }
            },
            {
                path:'suas-ordens',
                component: SuasOrdensFuncComponent,
                //canActivate: [authFuncionarioGuard],
                data: { tipoUsuario: 'funcionario' }
            },
            {
                path:'home-coord',
                component: HomeCoordComponent,
                //canActivate: [authCoordGuard],
                data: { tipoUsuario: 'coordenador' }
            },
            {
                path:'adm-coord',
                component: CadastroAdminComponent,
                //canActivate: [authCoordGuard],
                data: { tipoUsuario: 'coordenador' }
            },
            {
                path:'aprovacoes',
                component: AprovPendentesComponent,
                //canActivate: [authCoordGuard],
                data: { tipoUsuario: 'coordenador' }
            },
            {
                path:'suas-aprovacoes',
                component: SuasAprovacoesComponent,
                //canActivate: [authCoordGuard],
                data: { tipoUsuario: 'coordenador' }           
            },
            {
                path:'home-cpd',
                component: HomeCpdComponent,
                //canActivate: [authCpdGuard],
                data: { tipoUsuario: 'cpd' }
            },
            {
                path:'os-cpd',
                component: OsCpdComponent,
                //canActivate: [authCpdGuard],
                data: { tipoUsuario: 'cpd' }
            },
            {
                path:'manutencoes',
                component: ManutencoesCpdComponent,
                //canActivate: [authCpdGuard],
                data: { tipoUsuario: 'cpd' }
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ],
    }
]