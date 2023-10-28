import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './user.service';  
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:9090/auth/';
  private decodedToken: any;

  constructor(
    private route: ActivatedRoute,
    private jwtHelper:JwtHelperService,
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}

  signin(user: User): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<any>(`${this.baseUrl}signin`, user, { headers })
      .pipe(
        map((resp) => {
          sessionStorage.setItem('user', user.email);
          sessionStorage.setItem('access_token', resp.access_token);
          sessionStorage.setItem('token', `${resp.token_type} ${resp.access_token}`);
          return resp;
        })
      );
  }

  signout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('access_token');
    this.router.navigateByUrl('signin');
  }

  isUserSignedin() {
    return sessionStorage.getItem('token') !== null;
  }

  getSignedinUser() {
    return sessionStorage.getItem('user') as string;
  }

  getToken() {
    const token = sessionStorage.getItem('token') as string;
    return token;
  }

  public getDecodedToken(): any {
    if (!this.decodedToken) {
      const token = sessionStorage.getItem('access_token');
      if (token) {
        this.decodedToken = this.jwtHelper.decodeToken(token);
      }
    }
    return this.decodedToken;
  }

  public getRole(): string {
    const decodedToken = this.getDecodedToken();
    return decodedToken && decodedToken.role ? decodedToken.role : '';
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  public getRoleUser(username: string): Observable<string> {
    username = sessionStorage.getItem('user') as string;
    return this.userService.getUser(username).pipe(
      map((user) => user.role),
      first()
    );
  }
}
