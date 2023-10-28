import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}


  submitForm(event: Event) {
    event.preventDefault();

    const params = new HttpParams()
      .set('email', this.email)
      .set('message', this.message);

    this.http.post('http://localhost:9090/users/sendEmail', null, { params })
      .subscribe(response => {
        console.log('Email sent successfully!', response);
        // Optionally, you can display a success message to the user
      }, error => {
        console.error('Error sending email:', error);
        // Optionally, you can display an error message to the user
      });
  }


}
