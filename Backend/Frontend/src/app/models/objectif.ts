
import { Entreprise } from "./Entreprise/entreprise";
import { Activity } from "./activity";

export class Objectif {
    id_objectif!: number;
  name_objectif!: string;
  descr_objectif!: string;
  date_debut_objectif!: Date;
  date_fin_objectif!: Date;
  type_objectif!: string;
  status_objectif!: string;
  entreprise!: Entreprise;
  activities!: Activity[];
}
