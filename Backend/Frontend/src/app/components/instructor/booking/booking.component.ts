import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/services/event.service';
import { EventFormComponent } from '../events/event-form/event-form.component';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent { public blogMasonry : any = [];
  bookingDeleted: any;
  activeModal: any;;
  bookings: any;
  public routes = routes;
   constructor( private eventService:EventService,private modalService:NgbModal) {
     
     }
 
   ngOnInit(): void {
     this.getBookings()
   }
   getBookings() {
     this.eventService.getAllEventBookings().subscribe(
      bookings => {
        this.bookings=bookings
        console.log(this.bookings)
       },
       error => {
         console.log(error);
       }
     );
   }
 
     }