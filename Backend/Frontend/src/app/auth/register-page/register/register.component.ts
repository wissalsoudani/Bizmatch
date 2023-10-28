// register.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { passwordResponce, register } from 'src/app/models/register.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public routes = routes;

  public registerForm: register = {
    email: '',
    firstName: '',
    lastName: '',
    tel: '',
    password: '',
    confirmPassword: '',
    favoritePet: '',
    bestFriend: ''
  };
  
  public passwordResponce: passwordResponce = {};
  public register: any = [];
  public user: User = new User();
  public isRepresentantEntreprise: boolean = false;
  public selectedEntreprise: string = '';
  public userTypes: string[] = ['investor', 'collaborator', 'entrepreneur'];
  public selectedUserType: string = '';
  public entrepriseList: any[] = [];

  password = 'password';
  show = true;

  public registerOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1170: {
        items: 4
      }
    },
  };

  constructor(
    private DataService: DataService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.register = this.DataService.register;
  }

  ngOnInit(): void {
    this.fetchEntreprises();
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }

  public onChangePassword(password: any) {
    // Check for whitespaces
    if (password.match(/^$|\s+/)) {
      this.passwordResponce.passwordResponceText = "Whitespaces are not allowed";
      this.passwordResponce.passwordResponceImage = "";
      this.passwordResponce.passwordResponceKey = '';
      return;
    }

    // Check if the password is empty
    if (password.length === 0) {
      this.passwordResponce.passwordResponceText = "";
      this.passwordResponce.passwordResponceImage = "";
      this.passwordResponce.passwordResponceKey = '';
      return;
    }

    // Password strength checks
    if (password.length < 8) {
      this.passwordResponce.passwordResponceText = "Weak. Must contain at least 8 characters";
      this.passwordResponce.passwordResponceImage = "assets/img/icon/angry.svg";
      this.passwordResponce.passwordResponceKey = '0';
    } else if (password.search(/[a-z]/) < 0 || password.search(/[A-Z]/) < 0 || password.search(/[0-9]/) < 0) {
      this.passwordResponce.passwordResponceText = "Average. Must contain at least 1 upper case, 1 lower case, and 1 number";
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg";
      this.passwordResponce.passwordResponceKey = '1';
    } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      this.passwordResponce.passwordResponceText = "Almost. Must contain a special symbol";
      this.passwordResponce.passwordResponceImage = "assets/img/icon/smile.svg";
      this.passwordResponce.passwordResponceKey = '2';
    } else {
      this.passwordResponce.passwordResponceText = "Awesome! You have a secure password.";
      this.passwordResponce.passwordResponceImage = "assets/img/icon/smile.svg";
      this.passwordResponce.passwordResponceKey = '3';
    }
  }

  fetchEntreprises() {
    this.userService.getEnt().subscribe(
      (entreprises: any[]) => {
        this.entrepriseList = entreprises;
      },
      error => {
        console.error('Error fetching Entreprises:', error);
      }
    );
  }

  public createUser() {
    if (this.isRepresentantEntreprise) {
      this.user.role = 'REPRESENTATIVE';
      this.user.entreprise = this.selectedEntreprise;
    } else if (this.selectedUserType != null) {
      this.user.role = 'GUEST';
      this.user.job = this.selectedUserType;
    } else {
      this.user.role = 'GUEST';
    }
  
    // Handle undefined values in registerForm
    this.user.email = this.registerForm.email || '';
    this.user.firstName = this.registerForm.firstName || '';
    this.user.lastName = this.registerForm.lastName || '';
    this.user.tel = this.registerForm.tel || '';
    this.user.password = this.registerForm.password || '';
    this.user.favoritePet = this.registerForm.favoritePet || '';
    this.user.bestFriend = this.registerForm.bestFriend || '';
  
    this.authService.createUser(this.user).subscribe(response => {
      console.log(this.user);
    });
  
    this.router.navigate(['/auth/verification-code']);
  }
}  