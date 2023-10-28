// user.model.ts

import { Event } from './event.model';
import { EventBooking } from './eventBooking.model';
import { Reunion } from './reunion.model';
 
export class User {
  idUser?: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  role!: string;
  job!: string;
  image!: string;
  active!: boolean;
  tel!: string;
  password!: string;
  statusCode?: number;
  status?: string;
  bestFriend!: string;
  favoritePet!: string;
  entreprise!: string;
  events?: Event[];
  organizedEvents?: Event[];
  reunions?: Reunion[];
  eventBookings?: EventBooking[];
}
