import { Equipamento } from "./equipamento";
import { OrdemServico } from "./ordem-servico";

export interface OrdemEquipamento {
    ordemServicoId: number;
    ordemServico: OrdemServico;
    equipamentoId: number;
    equipamento: Equipamento;
}
