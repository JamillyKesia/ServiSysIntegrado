//import { Lancamento } from "./lancamento";
import { OrdemServico } from "./ordem-servico";

export interface User {
    id: number;
    nomeLogin: string;
    nomeUsuario: string;
    inativaUsuario: boolean;
    dataAlteracaoInatividade: Date;
    cargo: CargoEnum;
    tipoUsuario: TipoUsuarioEnum;
    ordensDeServico?: OrdemServico[];
   // lancamentos?: Lancamento[];
      
}

enum CargoEnum {
    Diretor = 'Diretor',
    Coordenador = 'Coordenado',
    Professor = 'Professor',
    Secretario = 'Secretario',
    OrientadorEducacional = 'OrientadorEducacional',
    TecnicoInformatica = 'TecnicoInformatica',
    CoordenadorTI = 'CoordenadorTI'
}

enum TipoUsuarioEnum {
    Solicitante = 'Solicitante',
    Coordenador_TI = 'Coordenador_TI',
    Tecnico = 'Tecnico',
    Administrador = 'Administrador'
}


