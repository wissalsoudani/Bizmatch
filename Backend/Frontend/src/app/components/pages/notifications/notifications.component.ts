import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Connexion, Etat } from 'src/app/models/Connexion/connexion';
import { MiseenrelationService } from 'src/app/services/miseenrelation.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public routes = routes;
  public notificationsToday: any = [];
  public notificationsYesterday: any = [];
  public userEmail!: string;
  public connexions!: Connexion[]; // List of connection requests
  public selectedConnexion!: Connexion | null;

  constructor(
    private DataService: DataService,
    private miseenrelation: MiseenrelationService,
    private http: HttpClient
  ) {
    this.notificationsToday = this.DataService.notificationsToday;
    this.notificationsYesterday = this.DataService.notificationsYesterday;
  }

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem('user') as string;
    this.loadConnectionRequests(); // Load your list of connection requests
  }

  // Function to load the list of connection requests
  loadConnectionRequests() {
    // Log the user email to verify it's correct
    console.log('User Email:', this.userEmail);
  
    // Modify the following line to get connections by user email
    this.miseenrelation.getAllConnexion(this.userEmail).subscribe((connexions: Connexion[]) => {
      // Log the retrieved data to see what's coming from the API
      console.log('Retrieved Connections:', connexions);
  
      this.connexions = connexions;
    });
  }

  // Function to accept a connection request
  accept(connexion: Connexion) {
    // Call the accept method for the selected connection
    this.acceptConnectionRequest(connexion);
  }

  // Function to accept a connection request
  acceptConnectionRequest(connexion: Connexion) {
    const connexionIdToAccept = connexion.id;
    this.miseenrelation.accepterDemandeDeConnexion(connexionIdToAccept).subscribe(() => {
      // Handle the result after accepting the request
      console.log('Connection request accepted successfully');
      // Optionally, refresh the list of connection requests
      this.loadConnectionRequests();
    });
  }

  // Function to refuse a connection request
  refuse(connexion: Connexion) {
    // Call the refuse method for the selected connection
    this.refuseConnectionRequest(connexion);
  }

  // Function to refuse a connection request
  refuseConnectionRequest(connexion: Connexion) {
    const connexionIdToRefuse = connexion.id;
    this.miseenrelation.refuserDemandeDeConnexion(connexionIdToRefuse).subscribe(() => {
      // Handle the result after refusing the request
      console.log('Connection request refused successfully');
      // Optionally, refresh the list of connection requests
      this.loadConnectionRequests();
    });
  }

  // Function to accept all connection requests
  acceptAll() {
    // Loop through this.connexions and call acceptConnectionRequest for each
    this.connexions.forEach((connexion) => {
      this.acceptConnectionRequest(connexion);
    });
  }
}
