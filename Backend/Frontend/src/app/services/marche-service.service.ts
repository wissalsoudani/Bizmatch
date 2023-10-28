import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const apiUrl = 'http://localhost:9090/gestionMarche/marche';

@Injectable({
  providedIn: 'root'
})
export class MarcheServiceService {

  constructor(private http: HttpClient) { }

  getAllMarches(): Observable<any> {
    return this.http.get(apiUrl);
  }
  delete(id_marche: number): Observable<boolean> {
    return this.http.delete<boolean>(`${apiUrl}/${id_marche}`);
  }
}
