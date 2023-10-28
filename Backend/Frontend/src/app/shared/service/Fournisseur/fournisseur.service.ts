import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  readonly API_URL = 'http://localhost:3306';
  
  constructor(private httpClient: HttpClient) { }

  getAllFourniseurs() {
    return this.httpClient.get(`${this.API_URL}/listFournisseur`)
  }
  addFournisseur(Fournisseur : any) {
    return this.httpClient.post(`${this.API_URL}/addFourn`, Fournisseur)
  }
  editFournisseur(Fournisseur : any, idFourn: any){
    return this.httpClient.put(`${this.API_URL}/modifierFournisseur/${idFourn}`, Fournisseur)
  }
  deleteFournisseur(idFourn : any){
    return  this.httpClient.delete(`${this.API_URL}/deleteFournisseur/${idFourn}`)
  }
}
