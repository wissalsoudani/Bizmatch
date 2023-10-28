import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventFormComponent } from './event-form/event-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  public routes = routes;
  public blogMasonry : any = [];
 eventDeleted: any;
 activeModal: any;;
  events: any;

  constructor( private eventService:EventService,private modalService:NgbModal) {
    
    }

  ngOnInit(): void {
    this.getEvents()
  }
  getEvents() {
    this.eventService.getAllEvents().subscribe(
      events => {
       this.events=events
       console.log(this.events)
      },
      error => {
        console.log(error);
      }
    );
  }
  addEvent() {
    const modalRef = this.modalService.open(EventFormComponent);
    modalRef.componentInstance.modal = modalRef;
  }
  
  updateEvent(event: Event) {
    const modalRef = this.modalService.open(EventFormComponent);
    modalRef.componentInstance.oldEvent = event;
    modalRef.componentInstance.modal = modalRef;
  }
  delete(id:number) {
    const confirmation = window.confirm('Are you sure you want to cancel this event?');
  
    if (confirmation) {
      this.eventService.deleteEvent(id).subscribe(
        (response) => {
          this.eventDeleted.emit(true);
          this.activeModal.close();
        },
        (error) => {
          console.log(error);
          this.activeModal.dismiss();
        }
      );
    } else {
      console.log('Delete action canceled.');
    }
  }
  
   
  
}
