import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Objectif } from 'src/app/models/objectif';
import { ObjectifService } from 'src/app/shared/service/objectif/objectif.service';

@Component({
  selector: 'app-objectif-list',
  templateUrl: './objectif-list.component.html',
  styleUrls: ['./objectif-list.component.scss']
})
export class ObJectifListComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  objectif!: Objectif[]; 
  constructor(private objectifService : ObjectifService) { } //calling external API from service API

  signature: any;


  ngOnInit(): void {
    //at the time of loading, we want to call the API to get the fournisseur list
    this.objectifService.getAllObjectifs().subscribe((response:any)=> {
      this.objectif=response
    }); //API call + load API response (result) in this.fournisseur
    //the subscribe is because the return type of the getAllFournisseurs() function is post/get/put/delete, so once it's ready the subscribe function is going to call the get/post/put/delete
  }

  deleteFournisseur(idFourn: any) {
    this.objectifService.deleteObjectifs(idFourn).subscribe((response:any)=>{
      console.log(response);
      this.objectif = this.objectif.filter(f => {
        return f.id_objectif != idFourn;
      });
    });
  }

  

  onExportPdf() {

    const img = new Image();

    html2canvas(document.getElementById("tableFourn")!).then(canvas => {


      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf.default();
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG',8,50,width,height),


      // Add title text
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('List of Fournisseurs - CampusConnect', 50, 20);

    // Add image
    pdf.addImage(img, 'PNG', 2, 10, 45, 25);


      pdf.save('FournisseurPDF.pdf');

    })
    img.crossOrigin = '';
       img.src = '../../assets/img/CampusConnect2.png';
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.objectifService.getAllObjectifs().subscribe((response:any)=> {
      this.objectif=response
    });
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.objectifService.getAllObjectifs().subscribe((response:any)=> {
      this.objectif=response
    });
  }

}
