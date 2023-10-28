import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-student-grid',
  templateUrl: './instructor-student-grid.component.html',
  styleUrls: ['./instructor-student-grid.component.scss']
})
export class InstructorStudentGridComponent implements OnInit {
  users: User [] = [];
  public routes = routes;
  currentUser: User = {
    email:'',
    password: '',
    idUser: 0,
    firstName: '',
    lastName: '',
    role: 'GUEST',
    image: '',
    active: false,
    tel: '',
    favoritePet: '',
    bestFriend: '',
    entreprise: '',
    job: ''
  

  };
  currentIndex = -1;
   
  newPassword = '';
  email = '';
  selectedUser: User = new User;
   
  ShowResetPassword: boolean = false;
  userDeleted: any;
  activeModal: any;
  constructor(private userService: UserService,private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.getAllUsers();
   
    
  } doSignout() {
    this.loginService.signout();
  }
  
  refreshList(): void {
    this.getAllUsers;
    this.currentUser = {
        email:'',
        password: ' ',
        idUser: 0,
        firstName: '',
        lastName: '',
        role: 'GUEST',
        image: '',
        active: false,
        tel: '',
        favoritePet: '',
        bestFriend: '',
        entreprise: '',
        job: 'investor'
      };

    this.currentIndex = -1;
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }
// Assuming you have a function like this for banning
 
banUser(email: string) {
  const confirmation = window.confirm('Are you sure you want to ban this user?');

  if (confirmation) {
    this.userService.banUser(email).subscribe(
      data => {
        console.log('User banned successfully.');
        this.router.navigate(['/instructor/instructor-student-grid']);
      },
      error => {
        console.log(error);
      }
    );
  } else {
    console.log('Ban action canceled.');
  }
}

unbanUser(email: string) {
  const confirmation = window.confirm('Are you sure you want to unban this user?');

  if (confirmation) {
    this.userService.unbanUser(email).subscribe(
      data => {
        console.log('User unbanned successfully.');
        this.getAllUsers();
      },
      error => {
        console.log(error);
      }
    );
  } else {
    console.log('Unban action canceled.');
  }
}

delete(email: string) {
  const confirmation = window.confirm('Are you sure you want to delete this user?');

  if (confirmation) {
    this.userService.deleteUser(email).subscribe(
      (response) => {
        this.userDeleted.emit(true);
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


   
  

 
  selectUser(user: User) {
    this.selectedUser = user;
  }
  
}
   

