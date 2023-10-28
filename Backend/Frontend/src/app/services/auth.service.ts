import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:9090/auth/';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<string> {
  
      return this.http.post('http://localhost:9090/auth/create', user, { responseType: 'text' })
        .pipe(
          catchError(error => {
            console.error('Error during user creation:', error);
            return throwError(error);
          })
        );
    }
    
}
