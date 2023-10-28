
import { Objectif } from "./objectif";
import { User } from "./user.model";

export class Activity {
    id_activity!: number;
  name_activity!: string;
  descr_activity!: string;
  date_debut_activity!: Date;
  date_fin_activity!: Date;
  type_activity!: string;
  status_activity!: string;
  priority_activity!: string;
  objectif!: Objectif;
  user?: User[];
}
