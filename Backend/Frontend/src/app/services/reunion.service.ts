// reunion.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReunionService {
  getReunionById(reunionId: number | undefined) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:9090/reunions';

  constructor(private http: HttpClient) {}

  addReunion(reunion: any, idEntreprise1: number, idEntreprise2: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/add/${idEntreprise1}/${idEntreprise2}`, reunion);
  }

  updateReunion(reunion: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, reunion);
  }

  getAllReunions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  deleteReunion(reunionId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${reunionId}`);
  }

  findReunionById(reunionId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${reunionId}`);
  }
}
