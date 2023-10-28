import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BesoinOffre } from 'src/app/models/besoin-offre';
import { BesoinOffreService } from 'src/app/shared/service/besoinoffre/besoin-offre.service';

@Component({
  selector: 'app-besoinoffre-edit',
  templateUrl: './besoinoffre-edit.component.html',
  styleUrls: ['./besoinoffre-edit.component.scss']
})
export class BesoinoffreEditComponent implements OnInit {


  /*to read the id parameter*/
  idFourn:any
  showAlert = false
  besoin = new BesoinOffre()

  constructor(private route:ActivatedRoute, private besoinOffreService:BesoinOffreService) { } /*dependecy used to read the id parameter*/



  ngOnInit(): void {
    this.idFourn = this.route.snapshot.params['idFourn']

    this.besoinOffreService.getBesoin(this.idFourn).subscribe((response: any) => {
        this.besoin = response
        console.log(response)

      })
  }

  editBesoin() {
    this.besoinOffreService.editBesoin(this.besoin,this.idFourn).subscribe((response) => {
      this.showAlert = true
      console.log(response)
    });


  }
  closeAlert() {
    this.showAlert = false
  }

}
