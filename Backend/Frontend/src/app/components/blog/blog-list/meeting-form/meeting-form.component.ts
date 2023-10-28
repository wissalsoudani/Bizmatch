import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Entreprise } from 'src/app/models/Entreprise/entreprise';
import { Reunion } from 'src/app/models/reunion.model';
import { ReunionService } from 'src/app/services/reunion.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss']
})
export class MeetingFormComponent {

  @Input()
  modal: NgbActiveModal = new NgbActiveModal;
  entreprise1:Entreprise={
    identreprise: 0,
    nom: '',
    secteur: '',
    adresse: '',
    telephone: 0,
    invitations: 0,
    latitude: '',
    longitude: '',
    description: '',
    partenaires: [],
    partenairesB: [],
    besoinCommercials: [],
    serviceCommercials: [],
    connexionsEntrantes: []
  }
  entreprise2:Entreprise={
    identreprise: 0,
    nom: '',
    secteur: '',
    adresse: '',
    telephone: 0,
    invitations: 0,
    latitude: '',
    longitude: '',
    description: '',
    partenaires: [],
    partenairesB: [],
    besoinCommercials: [],
    serviceCommercials: [],
    connexionsEntrantes: []
  }
  @Input() oldReunion: Reunion = {
    reunionId: 0,
    reunionName: '',
    reunionDate: new Date(),
    meetLink: '',
    reunionSubject: '',
    participants: [],
    entreprise1: new Entreprise(),
    entreprise2: new Entreprise(),
    startTime: new Date(),
    endTime: new Date()
  };
  reunion: Reunion = {
    reunionId: 0,
    reunionName: '',
    reunionDate: new Date(),
    meetLink: '',
    reunionSubject: '',
    participants: [],
    entreprise1:new Entreprise(),
    entreprise2:new Entreprise(),
    startTime: new Date(),
    endTime: new Date()
  };
  buttonText: string = 'Add';
  email=""

  enterprises: Entreprise[] = [];
  constructor(private reunionService: ReunionService,private userService:UserService) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('user') as string;
    this.userService.getEnt().subscribe((enterprises) => {
      this.enterprises = enterprises;
    });
    // If reunionId is provided, fetch the reunion data and set the form fields
    if (this.oldReunion.reunionName) {
      this.buttonText = 'Update';
      this.reunionService.findReunionById(this.oldReunion.reunionId).subscribe((reunion) => {
        this.reunion = this.oldReunion;
      });
    }
  }

  onSubmit() {


      // Add or update the reunion
      if (this.oldReunion.reunionName) {
        this.reunionService.updateReunion(this.reunion).subscribe(() => {
          this.close();
        });
      } else {
        this.reunionService.addReunion(this.reunion, this.entreprise1.identreprise, this.entreprise2.identreprise).subscribe(() => {
          this.close();
          console.log(this.reunion);
        });
      }
    }


  close() {
    this.modal.close('Close click');
  }

  dismiss() {
    this.modal.dismiss('Cross click');
  }
}
