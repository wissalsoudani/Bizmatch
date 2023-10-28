import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReunionService } from 'src/app/services/reunion.service';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';
import { Reunion } from 'src/app/models/reunion.model';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  activeModal: any;;
  reunions: any;
  email="";
  enterprises: any[]=[]
  reunionDeleted:any;
  public routes = routes;

   constructor( private reunionService:ReunionService,private modalService:NgbModal,private userService:UserService) {

     }

   ngOnInit(): void {
    this.email = sessionStorage.getItem('user') as string;
    this.userService.getEnt().subscribe((enterprises) => {
      this.enterprises = enterprises;
    });
     this.getreunions()
   }
   getreunions() {
     this.userService.getUserReunions(this.email).subscribe(
      reunions => {
        this.reunions=reunions
        console.log(this.reunions)
       },
       error => {
         console.log(error);
       }
     );
   }
   addMeeting() {
    const modalRef = this.modalService.open(MeetingFormComponent);
    modalRef.componentInstance.modal = modalRef;
  }

  updateMeeting(meeting:Reunion) {
    const modalRef = this.modalService.open(MeetingFormComponent);
    modalRef.componentInstance.oldReunion = meeting;
    modalRef.componentInstance.modal = modalRef;
  }
  delete(id:number) {
    const confirmation = window.confirm('Are you sure you want to cancel this meeting?');

    if (confirmation) {
      this.reunionService.deleteReunion(id).subscribe(
        (response) => {
          this.reunionDeleted.emit(true);
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
