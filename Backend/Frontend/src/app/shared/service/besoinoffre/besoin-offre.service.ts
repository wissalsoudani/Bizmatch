import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BesoinOffreService {

  constructor(private httpClient: HttpClient) { }

  //private baseUrl = 'http://localhost:9090/besoins';
  baseUrl = environment.API_BASE_URL;
  readonly API_URL = 'http://localhost:9090';

  getAllBesoins() {
    return this.httpClient.get(this.baseUrl + "/listBesoinOffre");
  }
  getBesoin(id:number) {
    return this.httpClient.get(`${this.API_URL}/getBesoinOffre/${id}`);
  }
  addBesoin(BesoinOffre: any , idE:any) {
    return this.httpClient.post(this.baseUrl+ "/addFournaddBesoinOffre/${idE}", BesoinOffre);
  }
  editBesoin(BesoinOffre: any, idBO: any){
    return this.httpClient.put(`${this.API_URL}/modifierBesoinOffre/${idBO}`, BesoinOffre);
  }
  deleteBesoin(idBO : any){
    return  this.httpClient.delete(`${this.API_URL}/deleteBesoinOffre/${idBO}`);
  }


}
