import { Entreprise } from "../Entreprise/entreprise";

export class Partenaire {
    idParte!: number;
    datePartenariat!: Date;
    statut!: Statut;
    entreprise1!: Entreprise;
    entreprise2!: Entreprise;
  }
  export enum Statut {
    EN_COURS = 'ENCOURS',
    TERMINEE = 'TERMINEE',
  }