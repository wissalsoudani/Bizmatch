import { Entreprise } from "../Entreprise/entreprise";

export class BesoinCommercial {
    idBesoin!: number;
    titre!: string;
    description!: string;
    entreprise!: Entreprise;
    besoinetat!:string;
  }
  export enum Besoinetat {
    Open , Inprogress, Closed
  }