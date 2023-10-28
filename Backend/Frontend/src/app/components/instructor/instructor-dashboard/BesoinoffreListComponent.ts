import { Component, OnInit } from '@angular/core';
import { BesoinOffre } from 'src/app/models/besoin-offre';
import { BesoinOffreService } from 'src/app/shared/service/besoinoffre/besoin-offre.service';


@Component({
  selector: 'app-besoinoffre-list',
  templateUrl: './besoinoffre-list.component.html',
  styleUrls: ['./besoinoffre-list.component.scss']
})
export class BesoinoffreListComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  besoins!: BesoinOffre[]; //to get the list of the fournisseurs in it
  public searchTxt: BesoinOffre['name_besoin'] = '';
  constructor(private besoinOffreservice: BesoinOffreService) { } //calling external API from service API

  signature: any;


  ngOnInit(): void {
    //at the time of loading, we want to call the API to get the fournisseur list
    this.besoinOffreservice.getAllBesoins().subscribe((response: any) => {
      this.besoins = response;
    }); //API call + load API response (result) in this.fournisseur

    //the subscribe is because the return type of the getAllFournisseurs() function is post/get/put/delete, so once it's ready the subscribe function is going to call the get/post/put/delete
  }

  deleteFournisseur(idFourn: any) {
    this.besoinOffreservice.deleteBesoin(idFourn).subscribe((response: any) => {
      console.log(response);
      this.besoins = this.besoins.filter(f => {
        return f.id_besoin != idFourn;
      });
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.besoinOffreservice.getAllBesoins().subscribe((response: any) => {
      this.besoins = response;
    });
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.besoinOffreservice.getAllBesoins().subscribe((response: any) => {
      this.besoins = response;
    });
  }
}
