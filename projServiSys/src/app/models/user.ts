import { OrdemServico } from "./ordem-servico";
//import { CargoEnum }

export interface User {
    id: number;
    nomeLogin: string;
    nomeUsuario: string;
    inativaUsuario: boolean;
    dataAlteracaoInatividade: Date;
    cargo: CargoEnum;
    tipoUsuario: TipoUsuarioEnum;
    ordensDeServico?: OrdemServico[];
}

