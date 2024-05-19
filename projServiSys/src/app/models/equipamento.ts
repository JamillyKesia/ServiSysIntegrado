import { Ambiente } from "./ambiente";
import { OrdemEquipamento } from "./ordem-equipamento";

export interface Equipamento {
    id: number;
    nomeEquipamento: string;
    serialEquipamento: string;
    tipoEquipamento: string;
    ambienteId: number;
    ambiente: Ambiente;
    ordemEquipamentos: OrdemEquipamento[];
}
