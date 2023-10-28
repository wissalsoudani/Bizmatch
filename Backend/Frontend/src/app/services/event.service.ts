// event.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventModel } from '../models/eventCalendar.model';
import { EventBooking } from '../models/eventBooking.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getBookingById(bookingId: number) {
    throw new Error('Method not implemented.');
  }
  updateBooking(bookingId: number, booking: EventBooking) {
    throw new Error('Method not implemented.');
  }
  bookEvent(booking: EventBooking, email: string) {
    throw new Error('Method not implemented.');
  }
  getEventByName(eventName: string) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:9090/events';

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getAllEventsArchive(): Observable<any> {
    return this.http.get(`${this.baseUrl}/archive`);
  }
  getEventById(eventId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  addEvent(event: any, organizerId: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${organizerId}`, event);
  }

  updateEvent(eventId: number, event: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${eventId}`, event);
  }

  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${eventId}`);
  }

  addEventBooking(eventId: number, userId: string, eventBooking: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${eventId}/bookings/${userId}`, eventBooking);
  }

  updateEventBooking(bookingId: number, eventBooking: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/bookings/${bookingId}`, eventBooking);
  }

  deleteEventBooking(bookingId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/bookings/${bookingId}`);
  }

  getAllEventBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings`);
  }

  getEventBookingById(bookingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings/${bookingId}`);
  }
  private events: EventModel[] = [
    { id: 1, title: 'Event 1', type: 'Event', start: new Date(), end: new Date() },
    { id: 2, title: 'Conference 1', type: 'Conference', start: new Date(), end: new Date() },
    { id: 3, title: 'Reunion 1', type: 'Reunion', start: new Date(), end: new Date() },
    // Add more events
  ];

  getEvents(): EventModel[] {
    return this.events;
  }
}
