import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReunionService } from 'src/app/services/reunion.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.scss']
})
export class ReunionComponent {
  bookingDeleted: any;
  activeModal: any;;
  reunions: any; 
  public routes = routes;
 
   constructor( private reunionService:ReunionService,private modalService:NgbModal) {
     
     }
 
   ngOnInit(): void {
     this.getreunions()
   }
   getreunions() {
     this.reunionService.getAllReunions().subscribe(
      reunions => {
        this.reunions=reunions
        console.log(this.reunions)
       },
       error => {
         console.log(error);
       }
     );
   }
 
     }