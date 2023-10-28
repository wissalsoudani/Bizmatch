// event-booking.model.ts

import { Event } from './event.model';
import { User } from './user.model';

export class EventBooking {
  bookingId?: number;
  bookingDate!: Date;
  status!: string;
  event!: Event;
  user!: User;
}
