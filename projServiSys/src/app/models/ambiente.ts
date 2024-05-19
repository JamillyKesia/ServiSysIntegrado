import { Equipamento } from "./equipamento";

export interface Ambiente {
    id: number;
    nomeAmbiente: string;
    equipamentos: Equipamento[];
}
