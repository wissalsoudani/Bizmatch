import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent implements OnInit {
  bookingDeleted: any;
  activeModal: any;
  bookings: any;
  email="";
  public routes = routes;
   constructor( private userService:UserService,private modalService:NgbModal,private eventService:EventService) {
     
     }
 
   ngOnInit(): void {
    
    this.email = sessionStorage.getItem('user') as string;
     this.getBookings()
   }
   getBookings() {
     this.userService.getBookings(this.email).subscribe(
      bookings => {
        this.bookings=bookings
        console.log(this.bookings)
       },
       error => {
         console.log(error);
       }
     );
   }
 
   delete(id:number) {
    const confirmation = window.confirm('Are you sure you want to cancel this booking?');
  
    if (confirmation) {
      this.eventService.deleteEventBooking(id).subscribe(
        (response) => {
          this.bookingDeleted.emit(true);
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