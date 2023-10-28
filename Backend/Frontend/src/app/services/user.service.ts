import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Reunion } from '../models/reunion.model';
import { Event } from '../models/event.model';
import { EventModel } from '../models/eventCalendar.model';
import { EventBooking } from '../models/eventBooking.model';
import { Entreprise } from '../models/Entreprise/entreprise';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:9090/users';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/admin/${username}`);
  }

  deleteUser(userName: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/${userName}`);
  }

  sendResetPassword(userName: string, userDTO: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/${userName}`, userDTO);
  }

  forgotPass(userName: string,newPassword:string, userDTO: User): Observable<any> {
    return this.http.post(`http://localhost:9090/auth/admin/ForgotPassword/${userName}/${newPassword}`, userDTO);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/admin/getUserById/${id}`);
  }

  banUser(email: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/banUser/${email}`, {});
  }

  unbanUser(email: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/admin/unbanUser/${email}`, {});
  }

  search(data: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/admin/search/${data}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/admin/getAllUsers`);
  }
  getEnt(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(`${this.baseUrl}/admin/getEnt`);
  }
  activateUser(userName: string, code: string): Observable<any> {
    return this.http.put<any>(`http://localhost:9090/auth/userAct/${code}/${userName}`, {});
  }
  getUserReunions(userId: string): Observable<Reunion[]> {
    const url = `${this.baseUrl}/${userId}/reunions`;
    return this.http.get<Reunion[]>(url);
  }

  getUserEvents(userId: number): Observable<Event[]> {
    const url = `${this.baseUrl}/${userId}/events`;
    return this.http.get<Event[]>(url);
  }

  getUserConferences(userId: number): Observable<Event[]> {
    const url = `${this.baseUrl}/${userId}/conferences`;
    return this.http.get<Event[]>(url);
  }
  getEvents(userId:any): Observable<EventModel[]> {
    const url = `${this.baseUrl}/${userId}/Calendar`;
    return this.http.get<EventModel[]>(url);
  }
  getBookings(userId:any): Observable<EventBooking[]> {
    const url = `${this.baseUrl}/${userId}/bookings`;
    return this.http.get<EventBooking[]>(url);
  }
}
