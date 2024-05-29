import { EstadoOrdemServicoEnum } from "./estado-ordem-servico-enum";
//import { Lancamento } from "./lancamento";
import { OrdemEquipamento } from "./ordem-equipamento";
import { User } from "./user";

export interface OrdemServico {
    cadastrarOrdem(arg0: { id: number; dataOrdemServico: Date; descricaoProblema: string; aprovada: boolean; localEquipamento: string; tipoEquipamento: string; serialEquipamento: string; estadoOrdemServico: EstadoOrdemServicoEnum | undefined; userId: number; user: User | undefined; }): unknown;
    id: number;
    dataOrdemServico: Date;
    descricaoProblema: string;
    aprovada: boolean;
    localEquipamento: string;
    tipoEquipamento: string;
    serialEquipamento: string;
    estadoOrdemServico: EstadoOrdemServicoEnum;
    userId: number;
    user: User;
    ordemEquipamentos?: OrdemEquipamento[];
    //lancamentos?: Lancamento[];
}