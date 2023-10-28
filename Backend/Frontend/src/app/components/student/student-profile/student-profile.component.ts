import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BesoinCommercial } from 'src/app/models/BesoinCommercial/besoin-commercial';
import { Entreprise } from 'src/app/models/Entreprise/entreprise';
import { ServiceCommercial } from 'src/app/models/ServiceCommercial/service-commercial';
import { MiseenrelationService } from 'src/app/services/miseenrelation.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { ServiceCommercialComponent } from './service-commercial/service-commercial.component';
import { BesoinCommercialComponent } from './besoin-commercial/besoin-commercial.component';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  public studentProfileEducation: any = [];
  public studentProfileExperience: any = [];
  public studentProfileCourses: any = [];
  public studentProfileReviews: any = [];
  public routes = routes;
  public studentProfileContactDetails: any = [];
  userEmail!: string;
  entreprise: Entreprise = {
    identreprise: 0,
    nom: '',
    secteur: '',
    adresse: '',
    telephone: 0,
    latitude: '',
    longitude: '',
    description: '',
    invitations: 0,
    partenaires: [],
    partenairesB: [],
    besoinCommercials: [],
    serviceCommercials: [],
    connexionsEntrantes: []
  };

  // Define properties to store services and besoinCommercial data
  serviceCommercials: ServiceCommercial[] = [];
  besoinCommercials: BesoinCommercial[] = [];

  constructor(
    private DataService: DataService,
    private miseenrelation: MiseenrelationService,
    private modalService: NgbModal
  ) {
    this.studentProfileEducation = this.DataService.studentProfileEducation;
    this.studentProfileExperience = this.DataService.studentProfileExperience;
    this.studentProfileCourses = this.DataService.studentProfileCourses;
    this.studentProfileReviews = this.DataService.studentProfileReviews;
    this.studentProfileContactDetails = this.DataService.studentProfileContactDetails;
  }

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem('user') as string;

    this.miseenrelation.getEntrepriseByUser(this.userEmail).subscribe(
      (entreprise: Entreprise) => {
        this.entreprise = entreprise;
        console.log('Data:', this.entreprise); // Log the retrieved entreprise

        // Use the entreprise id to fetch services and besoinCommercials
        this.loadServicesAndBesoinCommercial();
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  loadServicesAndBesoinCommercial(): void {
    // Call the service to get serviceCommercials
    this.miseenrelation.getAllServices(this.entreprise.identreprise).subscribe(
      (services: ServiceCommercial[]) => {
        this.serviceCommercials = services;
      },
      (error: any) => {
        console.error('Error fetching services:', error);
      }
    );

    // Call the service to get besoinCommercials
    this.miseenrelation.getAllBesoinCommercial(this.entreprise.identreprise).subscribe(
      (besoins: BesoinCommercial[]) => {
        this.besoinCommercials = besoins;
        console.log(this.besoinCommercials);
      },
      (error: any) => {
        console.error('Error fetching besoinCommercials:', error);
      }
    );
  }

  addBesoin() {
    const modalRef = this.modalService.open(BesoinCommercialComponent);
    modalRef.componentInstance.modal = modalRef;
  }

  addService() {
    const modalRef = this.modalService.open(ServiceCommercialComponent);
    modalRef.componentInstance.modal = modalRef;
  }
}
