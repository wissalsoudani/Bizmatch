// reunion.model.ts


import { Entreprise } from './Entreprise/entreprise';
import { User } from './user.model';

export class Reunion {
  reunionId!: number;
  reunionName!: string;
  reunionDate!:Date;
  meetLink!: string;
  reunionSubject!: string;
  participants?: User[];
  entreprise1?: Entreprise;
  entreprise2?: Entreprise;
  startTime!: Date;
  endTime!: Date;
}
