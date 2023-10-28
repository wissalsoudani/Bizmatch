import { Component, OnInit } from '@angular/core';
import { Objectif } from 'src/app/models/objectif';
import { ObjectifService } from 'src/app/shared/service/objectif/objectif.service';

@Component({
  selector: 'app-objectif-add',
  templateUrl: './objectif-add.component.html',
  styleUrls: ['./objectif-add.component.scss']
})
export class ObjectifAddComponent implements OnInit{
  objectif = new Objectif();
  idB:any
  showAlert=false; //the alert isn't going to be shown by default since we have set its value to false in here
  constructor(private objectifService: ObjectifService ) { }

  ngOnInit(): void {


  }
  saveObjectif() {
    this.objectifService.addObjectifs(this.objectif, this.idB).subscribe((response)=>{
      console.log(response); //because we just want to print sth
      
      //to clear the form's fields after hitting the save button
      this.objectif=new Objectif(); //assign a new reference (new reference => we will get all default values) so all will be replaced
      
      //to switch the alert's state to true once the save is successful, to show the success alert
      this.showAlert=true;
    });
  }

  //to reset the alert state to false once the close alert button is clicked
  closeAlert() {
    this.showAlert=false
  }

  

}
