import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public routes = routes;
  public email: string = '';
  public passwordType: string = 'password';
  public passwordIcon: string = 'eye';
  public rememberMe: boolean = false;
  error: string = '';
  public welcomeLogin: any = [];

  public welcomeLoginOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };
  password: string='';
  role:string='';
  

  constructor(private DataService: DataService, public router: Router,private loginService:LoginService) {
    this.welcomeLogin = this.DataService.welcomeLogin;
  }

  ngOnInit(): void {}

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
  }


  doLogin() {
    console.log('doLogin function called');
    if ( this.email !== null && this.password !== null) {
      const user: User = {
        email: this.email,
        password: this.password,
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
console.log(this.password)
      this.loginService.signin(user).subscribe(
        (result) => {
          this.loginService.getRoleUser(this.email).subscribe((role) => {
            this.role = role;
            console.log(role);
            if (this.role === 'SUPERADMIN') {
              this.router.navigate(['/instructor/instructor-dashboard']);
            } else {
              this.router.navigate(['/home']);
            }
          });
        },
        () => {
          this.error = 'Either invalid credentials or something went wrong';
        }
      );
    } else {
      this.error = 'Invalid Credentials';
    }
  }
}
