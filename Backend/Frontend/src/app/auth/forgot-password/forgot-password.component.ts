import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from 'src/app/shared/service/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public routes = routes;
  public forgotPassword: any = [];
  email: string = '';
  bestFriend: string = '';
  favoritePet: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  public forgotPasswordOwlOptions: OwlOptions = {
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

  constructor(private DataService: DataService, public router: Router,private userService:UserService) {
    this.forgotPassword = this.DataService.forgotPassword;
  }

  ngOnInit() {
    Aos.init();
  }

  resetPassword() {
    // Basic validation
    if (!this.email || !this.bestFriend || !this.favoritePet || !this.newPassword || !this.confirmNewPassword) {
      // Display an error message or handle validation as needed
      console.error('All fields are required');
      return;
    }

    // Additional validation, e.g., check if passwords match
    if (this.newPassword !== this.confirmNewPassword) {
      // Display an error message or handle validation as needed
      console.error('Passwords do not match');
      return;
    }

    const user:User = {
      idUser: 0,
      firstName: '',
      lastName: '',
      email: this.email,
      role: 'SUPERADMIN',
      image: '',
      active: false,
      tel: '',
      password: this.newPassword, // Use the correct control value
      favoritePet: this.favoritePet,
      bestFriend: this.bestFriend,
      entreprise:'',
      job:''
    }

    this.userService.forgotPass(this.email, this.newPassword,user).subscribe(
      response => {
        console.log(response);
         
        
      },
      error => {
        console.log(error.error); // Log error.error instead of the entire error object
      }
    )  
  
    // Redirect to a success page or handle the response from the server
    this.router.navigate(['/auth/login']);
  
}}
