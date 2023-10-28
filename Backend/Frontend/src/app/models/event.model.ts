// event.model.ts

import { EventBooking } from './eventBooking.model';
import { User } from './user.model';
 
export class Event {
  eventId!: number;
  eventName!: string;
  eventDate!: Date;
  image!: string;
  eventCapacity!: number;
  remainingPlaces!: number;
  eventLocation!: string;
  typeEvent!: string;
  eventOrganizer!: User;
  participants?: User[];
  eventBookings?: EventBooking[];
  speakers!: string;
  status!:boolean;
  description!:string;
}
