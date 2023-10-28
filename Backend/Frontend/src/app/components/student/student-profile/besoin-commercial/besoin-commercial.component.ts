
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BesoinCommercial } from 'src/app/models/BesoinCommercial/besoin-commercial';
import { Entreprise } from 'src/app/models/Entreprise/entreprise';
import { MiseenrelationService } from 'src/app/services/miseenrelation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-besoin-commercial',
  templateUrl: './besoin-commercial.component.html',
  styleUrls: ['./besoin-commercial.component.scss']
})

  export class BesoinCommercialComponent implements OnInit {
    @Input()
    modal: NgbActiveModal = new NgbActiveModal; 
    @Input() oldBesoin: BesoinCommercial = {
      idBesoin: 0,
      titre: '',
      description: '',
      entreprise: new Entreprise,
      besoinetat: ''
    };
    besoin: BesoinCommercial = {
      idBesoin: 0,
      titre: '',
      description: '',
      entreprise: new Entreprise,
      besoinetat: ''
    };
    buttonText: string = 'Add';
  userEmail: string="";
  entreprise: Entreprise = new Entreprise;
  Added: any;

    // Additional properties specific to BesoinCommercial
  
    constructor(private userService: UserService,private mise:MiseenrelationService) { }
  
    ngOnInit(): void {
      
      if (this.oldBesoin.idBesoin) {
        this.buttonText = 'Update';
     

    }
    this.userEmail = sessionStorage.getItem('user') as string;
  
    

    }
  
    onSubmit() {
      if (this.oldBesoin.idBesoin) {
        
        }
       else {
        this.mise.addBesoin(this.userEmail,this.besoin).subscribe(() => {
          
          
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
  