import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/models/Entreprise/entreprise';
import { MiseenrelationService } from 'src/app/services/miseenrelation.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import * as L from 'leaflet';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  public routes = routes;
  entreprise!: Entreprise[];
  public requestSent: { [key: number]: boolean } = {}; // To track whether a request has been sent to a company
  userEmail:string=''
  constructor( private miseenrelationService: MiseenrelationService) {

  }

  ngOnInit(): void {
    this.miseenrelationService.getAllEntreprises().subscribe(
      (entreprise) => {
        this.entreprise = entreprise;
        this.initializeMap();
      },
      (error) => {
        console.error('Erreur lors de la récupération des entreprises:', error);
      }
    );
  }

  sendRequestToCompany(companyId: number) {
    // Check if a request has already been sent to this company
    if (this.requestSent[companyId]) {
      console.log('Request has already been sent to this company.');
      return;
    }

    this.miseenrelationService.envoyerDemandeDeConnexion(this.userEmail, companyId).subscribe(
      (connexion) => {
        console.log('Connection request sent successfully:', connexion);
        // Handle the success here as needed
        // Set the flag to mark that a request has been sent to this company
        this.requestSent[companyId] = true;
      },
      (error) => {
        console.error('Error sending connection request:', error);
        // Handle the error appropriately
      }
    );
  }

  initializeMap() {
    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Placer les marqueurs pour chaque entreprise
    this.entreprise.forEach((entreprise) => {
      const latitude = Number(entreprise.latitude);  // Convertir en nombre
      const longitude = Number(entreprise.longitude);  // Convertir en nombre

      L.marker([latitude, longitude], {
        icon: L.divIcon({
          className: 'my-custom-marker', // Nom de la classe CSS que vous avez définie
           // Contenu de l'icône (peut être vide si vous utilisez uniquement une image)
        })
      }).addTo(map)
        .bindPopup(entreprise.nom)
        .openPopup();
    });
  }
}
