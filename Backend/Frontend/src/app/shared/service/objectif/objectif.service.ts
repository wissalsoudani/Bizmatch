import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.API_BASE_URL;
  readonly API_URL = 'http://localhost:9090';

  getAllObjectifs() {
    return this.httpClient.get(this.baseUrl + "/listObjectifs");
  }
  getObjectifs(id:number) {
    return this.httpClient.get(`${this.API_URL}/getBesoinOffre/${id}`);
  }                                 
  addObjectifs(Objectif: any , idE:any) {
    return this.httpClient.post(this.baseUrl+ "/addObjectif/${idE}", Objectif);
  }
  editObjectifs(Objectif: any, idBO: any){
    return this.httpClient.put(`${this.API_URL}/modifierObjectif/${idBO}`, Objectif);
  } 
  deleteObjectifs(idBO : any){
    return  this.httpClient.delete(`${this.API_URL}/deleteObjectif/${idBO}`);
  }
}
