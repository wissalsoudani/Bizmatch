import { BesoinCommercial } from "../BesoinCommercial/besoin-commercial";
import { Connexion } from "../Connexion/connexion";
import { Partenaire } from "../Partenaire/partenaire";
import { ServiceCommercial } from "../ServiceCommercial/service-commercial";
import { BesoinOffre } from "../besoin-offre";
import { Reunion } from "../reunion.model";

export class Entreprise {
    identreprise!: number;
    nom!: string;
    secteur!: string;
    adresse!: string;
    telephone!: number;
    latitude!:string;
    longitude!:string;
    description!:string;
    invitations!: number;
    partenaires!: Partenaire[];
    partenairesB!: Partenaire[];
    besoinCommercials!: BesoinCommercial[];
    serviceCommercials!: ServiceCommercial[];
    connexionsEntrantes!: Connexion[];
    entreprise1Reunions?: Reunion[]; // Add this line
    entreprise2Reunions?: Reunion[];
    besoinOffres?: BesoinOffre[];
  }
