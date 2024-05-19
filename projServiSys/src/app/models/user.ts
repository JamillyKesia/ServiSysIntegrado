import { Lancamento } from "./lancamento";
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
    lancamentos?: Lancamento[];
      
}

enum CargoEnum {
    func = 'funcionario',
    coord = 'coordenador',
    cpd = 'cpd',
}

enum TipoUsuarioEnum {
    func = 'funcionario',
    coord = 'coordenador',
    cpd = 'cpd',
}


