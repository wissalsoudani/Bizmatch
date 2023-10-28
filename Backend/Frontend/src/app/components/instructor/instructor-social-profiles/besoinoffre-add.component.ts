import { Component, OnInit } from '@angular/core';
import { BesoinOffre } from 'src/app/models/besoin-offre';
import { BesoinOffreService } from 'src/app/shared/service/besoinoffre/besoin-offre.service';

@Component({
  selector: 'app-besoinoffre-add',
  templateUrl: './besoinoffre-add.component.html',
  styleUrls: ['./besoinoffre-add.component.scss']
})
export class BesoinoffreAddComponent implements OnInit {
  besoin = new BesoinOffre();
  idB:any
  showAlert=false; //the alert isn't going to be shown by default since we have set its value to false in here
  constructor(private besoinOffreservice: BesoinOffreService ) { }

  ngOnInit(): void {


  }
  saveBesoin() {
    this.besoinOffreservice.addBesoin(this.besoin, this.idB).subscribe((response)=>{
      console.log(response); //because we just want to print sth
      
      //to clear the form's fields after hitting the save button
      this.besoin=new BesoinOffre(); //assign a new reference (new reference => we will get all default values) so all will be replaced
      
      //to switch the alert's state to true once the save is successful, to show the success alert
      this.showAlert=true;
    });
  }

  //to reset the alert state to false once the close alert button is clicked
  closeAlert() {
    this.showAlert=false
  }


}
