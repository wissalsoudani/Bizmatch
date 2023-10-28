import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/services/event.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-events-archive',
  templateUrl: './events-archive.component.html',
  styleUrls: ['./events-archive.component.scss']
})
export class EventsArchiveComponent {
  public blogMasonry : any = [];
  eventDeleted: any;
  activeModal: any;;
   events: any;
   public routes = routes;
   constructor( private eventService:EventService,private modalService:NgbModal) {
     
     }
 
   ngOnInit(): void {
     this.getEvents()
   }
   getEvents() {
     this.eventService.getAllEventsArchive().subscribe(
       events => {
        this.events=events
        console.log(this.events)
       },
       error => {
         console.log(error);
       }
     );
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
 
