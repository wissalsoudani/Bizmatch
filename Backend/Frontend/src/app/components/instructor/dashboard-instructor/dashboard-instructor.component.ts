import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-dashboard-instructor',
  templateUrl: './dashboard-instructor.component.html',
  styleUrls: ['./dashboard-instructor.component.scss']
})
export class DashboardInstructorComponent implements OnInit {
  public myCourse : any = [];
  
    public routes = routes; 
    user: User = new User;
    email:string='';
      ShowResetPassword= false;
    constructor(private userService: UserService ) {
       }
    
    ngOnInit(): void {this.getUser()
  }
   
   
  
    getUser() {
      this.email=sessionStorage.getItem('user') as string;
      this.userService.getUser(this.email).subscribe(
        data => {
          this.user = data;
          console.log(this.user);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
