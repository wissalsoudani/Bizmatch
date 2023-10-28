
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from 'src/app/models/event.model';  // Make sure to import the Event model
import { User } from 'src/app/models/user.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  email:String="";
  @Input()
  modal: NgbActiveModal = new NgbActiveModal;
  @Input() oldEvent: Event = {
    eventId: 0,
    eventName: '',
    eventDate: new Date(),
    eventCapacity: 0,
    remainingPlaces: 0,
    eventLocation: '',
    typeEvent: '',
    image: '',
    eventOrganizer: new User,

    status: false,
    speakers: '',
    description: ''
  };
  event: Event = {
    eventId: 0,
    eventName: '',
    eventDate: new Date(),
    eventCapacity: 0,
    remainingPlaces: 0,
    eventLocation: '',
    typeEvent: '',
    image: '',
    eventOrganizer: new User,

    status: false,
    speakers: '',
    description: ''
  };
  buttonText: string = 'Add';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.email=sessionStorage.getItem('user') as string;

    // If eventId is provided, fetch the event data and set the form fields
    if (this.oldEvent.eventName) {
      this.buttonText = 'Update';
      this.eventService.getEventById(this.oldEvent.eventId).subscribe((event) => {
        this.event = this.oldEvent;
      });
    }
  }

  onSubmit() {
    this.event.image= this.event.image.replace('C:\\fakepath\\', '');
    // Add or update the event
    if (this.oldEvent.eventName) {
      this.eventService.updateEvent(this.oldEvent.eventId,this.event).subscribe(() => {
        this.close();
      });
    } else {
      this.eventService.addEvent(this.event,this.email).subscribe(() => {
        this.close();console.log(this.event)
      });
    }
  }

  close() {
    this.modal.close('Close click');
  }

  dismiss() {
    this.modal.dismiss('Cross click');
  }
}
