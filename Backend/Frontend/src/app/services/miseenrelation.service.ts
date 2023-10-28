import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BesoinCommercial } from '../models/BesoinCommercial/besoin-commercial';

import { ServiceCommercial } from '../models/ServiceCommercial/service-commercial';
import { Entreprise } from '../models/Entreprise/entreprise';
import { Partenaire } from '../models/Partenaire/partenaire';
import { Connexion } from '../models/Connexion/connexion';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiseenrelationService {
  private baseUrl = 'http://localhost:9090/miserelation'
  private url='http://localhost:9093/prestation'
  constructor(private http: HttpClient) { }
 

  getAllBesoinCommercial(ide: number): Observable<BesoinCommercial[]> {
    const url = `${this.url}/Besoin/getall/${ide}`;
    return this.http.get<BesoinCommercial[]>(url);
  }
  getAllServices(ide: number): Observable<ServiceCommercial[]> {
    const url = `${this.url}/Service/getAll/${ide}`;
    return this.http.get<ServiceCommercial[]>(url);
  }
  getDureeMoyennePartenariats(identreprise: number): Observable<number> {
    const url = `${this.baseUrl}/miserelation/Partenariat/getdureemoyenne/${identreprise}`;
    return this.http.get<number>(url);
  }
  addBesoin(email: string, besoinCommercial: any): Observable<any> {
    const url = `${this.url}/addBesoin/${email}`;
    return this.http.post(url, besoinCommercial);
  }

  addService(ide:number,s:ServiceCommercial) : Observable<ServiceCommercial>
  {
    const url =`${this.url}/Service/add/${ide}`;
    return this.http.post<ServiceCommercial>(url,s);
  }

  getAll(): Observable<ServiceCommercial[]>
  {
    return this.http.get<ServiceCommercial[]>(`${this.baseUrl}/Service/getall`);
  }
  addEntreprise(entreprise:Entreprise):Observable<Entreprise>
  {
    return this.http.post<Entreprise>(`${this.baseUrl}/entreprises`,entreprise);
  }
  updateEntreprise(entreprise:Entreprise): Observable<Entreprise>
  {
    return this.http.put<Entreprise>(`${this.baseUrl}/entreprises/update`,entreprise);
  }

    
    getEntrepriseById(id: number): Observable<Entreprise> {
      return this.http.get<Entreprise>(`${this.baseUrl}/entreprises/${id}`);
    }
  
    setEntrepriseenUser(email: string, nom: string):Observable<User>
     {
      const url = `${this.baseUrl}/EntrepriseUser/${email}/${nom}`;
  
      return this.http.put<User>(url, User); 
    }
    getAllEntreprises(): Observable<Entreprise[]> {
      return this.http.get<Entreprise[]>(`${this.baseUrl}/entreprises`);
    }
  

    deleteEntreprise(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/entreprises/${id}`);
    }

    updatePartenaire(partenaire: Partenaire): Observable<Partenaire> {
      return this.http.put<Partenaire>(`${this.baseUrl}/Partenariat/update`, partenaire);
    }
  
    getByIdPartenaire(idp: number): Observable<Partenaire> {
      return this.http.get<Partenaire>(`${this.baseUrl}/Partenariat/getById/${idp}`);
    }
  
    getAllPartenaire(): Observable<Partenaire[]> {
      return this.http.get<Partenaire[]>(`${this.baseUrl}/Partenariat/getall`);
    }
    removePartenaire(idp: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/Partenariat/delete/${idp}`);
    }
  
    rechercherEntreprises(secteur: string, adresse: string): Observable<Entreprise[]> {
      return this.http.get<Entreprise[]>(`${this.baseUrl}/Connexion/recherche/${secteur}/${adresse}`);
    }
  
    envoyerDemandeDeConnexion(email: string, idB: number): Observable<Connexion> {
      return this.http.post<Connexion>(`${this.baseUrl}/connexion/demande/${email}/${idB}`, null);
    }
    getEntrepriseByUser(email: string): Observable<Entreprise> {
      return this.http.get<Entreprise>(`${this.baseUrl}/getbyuserentreprise/${email}`);
    }
    accepterDemandeDeConnexion(connexionId: number): Observable<void> {
      const url = `${this.baseUrl}/connexion/accepter/${connexionId}`;
      return this.http.put<void>(url, {});
    }
  
    refuserDemandeDeConnexion(connexionId: number): Observable<void> {
      const url = `${this.baseUrl}/connexion/refuser/${connexionId}`;
      return this.http.put<void>(url, {});
    }

    getAllConnexion(email: string): Observable<Connexion[]> {
      return this.http.get<Connexion[]>(`${this.baseUrl}/connexion/getallinvitations/${email}`);
    }
}
