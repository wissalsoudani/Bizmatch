import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Event } from 'src/app/models/event.model';
import { User } from 'src/app/models/user.model';
import { EventService } from 'src/app/services/event.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { EventBooking } from 'src/app/models/eventBooking.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  public routes = routes;
   email="";
  event: Event = {
    eventId: 0,
    eventName: '',
    eventDate: new Date(),
    image: '',
    eventCapacity: 0,
    remainingPlaces: 0,
    eventLocation: '',
    typeEvent: '',
    eventOrganizer: new User(),
    speakers: '',
    status: false,
    description: '',
  };
  booking: EventBooking = {
    bookingDate: new Date(),
    status: '',
    event: new Event,
    user: new User
  };

  constructor(private route: ActivatedRoute, private eventService: EventService,private modalService:NgbModal) {}

  ngOnInit() {
    this.email = sessionStorage.getItem('user') as string;

    this.route.paramMap.subscribe((params) => {
      const eventId = params.get('id');

      // Check if eventId is not null before trying to convert it
      if (eventId !== null) {
        const eventIdNumber = +eventId; // Convert to number
        this.eventService.getEventById(2).subscribe((event) => {
          this.event = event[0];
          console.log(this.event);
        });
      }
    });
  }
   addEventBooking(eventId: number) {
    const confirmation = window.confirm('Do you really want to book this event?');

    if (confirmation) {
      this.eventService.addEventBooking(eventId, this.email, this.booking).subscribe(() => {
        alert('Booking successful!');

      });
    }
  }

}
