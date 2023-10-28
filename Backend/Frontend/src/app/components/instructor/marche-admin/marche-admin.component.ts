import { routes } from 'src/app/shared/service/routes/routes';
import { MarcheServiceService } from './../../../services/marche-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marche-admin',
  templateUrl: './marche-admin.component.html',
  styleUrls: ['./marche-admin.component.scss']
})
export class MarcheAdminComponent implements OnInit{
  marcheList: any;
  public routes = routes;

  constructor(private MarcheServiceService: MarcheServiceService) {}

  ngOnInit(): void {
    this.retrieveMarches();
  }

    retrieveMarches(): void {
   this.MarcheServiceService.getAllMarches().subscribe(
    (data) =>{
      this.marcheList = data;
      console.log(data); // add this line to log the response
    },
    (error) => {
      console.log(error);
    }
  );
  }
  deleteMarche(id_marche: number): void {
    this.MarcheServiceService.delete(id_marche).subscribe(
      (response) => {
        console.log('marche deleted successfully');
        if (response) {
          this.retrieveMarches;

        } else {
          console.log('Error deleting marche');
        }
      },
      (error) => {
        console.log('Error deleting marche: ', error);
      }
    );
  }
}
