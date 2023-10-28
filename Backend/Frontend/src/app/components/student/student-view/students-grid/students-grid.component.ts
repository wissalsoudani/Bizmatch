import { Component, OnInit } from '@angular/core';
import { MarcheServiceService } from 'src/app/services/marche-service.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-students-grid',
  templateUrl: './students-grid.component.html',
  styleUrls: ['./students-grid.component.scss']
})
export class StudentsGridComponent implements OnInit {
  public routes = routes;
  marcheList: any;

  constructor( private MarcheServiceService:MarcheServiceService) {}

  ngOnInit(): void {
    this.retrieveMarche();
  }

    retrieveMarche(): void {
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

}
