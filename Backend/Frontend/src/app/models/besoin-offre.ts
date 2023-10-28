import { Entreprise } from "./Entreprise/entreprise";


export class BesoinOffre {
    id_besoin!: number;
    name_besoin!: string;
    descr_besoin!: string;
    status_besoin!: number; // 0=not met, 1=met
    date_ajout_besoin!: Date;
    type!: string;
    category!: string;
    entreprise!: Entreprise;
}
