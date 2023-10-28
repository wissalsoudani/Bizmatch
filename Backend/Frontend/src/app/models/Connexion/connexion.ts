import { Entreprise } from "../Entreprise/entreprise";

export class Connexion {
    id!:number;
    entrepriseA!:Entreprise;
    entrepriseB!:Entreprise;
    etat!:Etat;
}
export enum Etat {
    EN_ATTENTE = 'ENATTENTE',
    ACCEPTEE = 'ACCEPTEE',
    REFUSEE = 'REFUSEE',
  }