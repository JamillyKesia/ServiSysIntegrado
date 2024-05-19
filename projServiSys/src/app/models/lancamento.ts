import { EstadoOrdemServicoEnum } from "./estado-ordem-servico-enum";
import { OrdemServico } from "./ordem-servico";

export interface Lancamento {
    id: number;
    dataLancamento: Date;
    descricaoProblema?: string;
    estadoOrdemServico: EstadoOrdemServicoEnum;
    ordemServicoId?: number;
    ordemServico?: OrdemServico;
}
