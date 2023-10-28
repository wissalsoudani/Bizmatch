import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {
  public verificationCode: any = [];
  public routes = routes;
  public oneTimePassword = {
    data1: "",
    data2: "",
    data3: "",
    data4: ""
  };
  public verificationCodeOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };
  email: string='';

  public ValueChanged(data: string, box: string): void {
    if (box == 'digit-1' && data.length > 0) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && data.length > 0) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && data.length > 0) {
      document.getElementById('digit-4')?.focus();
    } else {
      return
    }
  }
  public tiggerBackspace(data: any, box: string) {
    let StringyfyData: any;
    if (data) {
      StringyfyData = data.toString();
    } else {
      StringyfyData = null;
    }
    if (box == 'digit-4' && StringyfyData == null) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && StringyfyData == null) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && StringyfyData == null) {
      document.getElementById('digit-1')?.focus();
    }
  }


  constructor(private DataService: DataService,public router: Router,private userService:UserService) {
    this.verificationCode = this.DataService.verificationCode;
  }

  ngOnInit(): void {
  }
  submitActivation() {
    const userName = this.email; // Assuming email is the username for activation
    const code = `${this.oneTimePassword.data1}${this.oneTimePassword.data2}${this.oneTimePassword.data3}${this.oneTimePassword.data4}`;

    this.userService.activateUser(userName, code).subscribe(
      (response) => {
        // Handle successful activation response
        console.log('Activation successful:', response);

        // Redirect to login or perform any other action
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        // Handle error
        console.error('Activation failed:', error);
      }
    );
  }
}