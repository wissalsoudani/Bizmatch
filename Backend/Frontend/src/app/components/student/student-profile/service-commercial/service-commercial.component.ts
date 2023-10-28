import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Entreprise } from 'src/app/models/Entreprise/entreprise';
import { ServiceCommercial } from 'src/app/models/ServiceCommercial/service-commercial';
import { MiseenrelationService } from 'src/app/services/miseenrelation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-service-commercial',
  templateUrl: './service-commercial.component.html',
  styleUrls: ['./service-commercial.component.scss']
})
export class ServiceCommercialComponent {
  @Input()
  modal: NgbActiveModal = new NgbActiveModal; 
  @Input() oldService: ServiceCommercial = {
    idService: 0,
    nomservice: '',
    problemeservice: '',
    description: '',
    entreprise: new Entreprise
  };
  service: ServiceCommercial = {
    idService: 0,
    nomservice: '',
    problemeservice: '',
    description: '',
    entreprise: new Entreprise
  };
  buttonText: string = 'Add';
userEmail: string="";
entreprise: Entreprise = new Entreprise;
Added: any;

  // Additional properties specific to ServiceCommercial

  constructor(private userService: UserService,private mise:MiseenrelationService) { }

  ngOnInit(): void {
    
    if (this.oldService.idService) {
      this.buttonText = 'Update';
   

  }
  this.userEmail = sessionStorage.getItem('user') as string;
  
  this.mise.getEntrepriseByUser(this.userEmail).subscribe(
    entreprise => {
      this.entreprise = entreprise;
      console.log('Data:', this.userEmail); 
    },
    (error) => {
      console.error('Error:', error);
    }
  );

  

  }

  onSubmit() {
    if (this.oldService.idService) {
      
      }
     else {
      this.mise.addService(this.entreprise.identreprise,this.service).subscribe(() => {
    
        this.close();
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
