import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../models/Fournisseur/fournisseur';
import { FournisseurService } from '../../../shared/service/Fournisseur/fournisseur.service';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { routes } from 'src/app/shared/service/routes/routes';
//import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

/*@NgbModal({
  imports: [NgbModal]
})*/

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {
  listFournisseurs : any; 
  form : boolean = false;
   fournisseur!: Fournisseur;
   closeResult! : string;

  constructor(private fournisseurService : FournisseurService) { }

  ngOnInit(): void {
    this.getAllFournisseurs();;

    this.fournisseur = {
      idFourn : null,
      adrFourn : null,
      matriculeFourn : null,
      nomFourn : null,
      telFourn : null,
      emailFourn : null
    }
  }

  getAllFournisseurs(){
    this.fournisseurService.getAllFourniseurs().subscribe(res => this.listFournisseurs = res)
  }

  addFournisseur(p: any){
    this.fournisseurService.addFournisseur(p).subscribe(() => {
      this.getAllFournisseurs();
      this.form = false;
    });
  }

  editFournisseur(fournisseur : Fournisseur,  idFourn: any){
    this.fournisseurService.editFournisseur(fournisseur, idFourn).subscribe();
  }
  deleteFournisseur( idFourn: any){
    this.fournisseurService.deleteFournisseur(idFourn).subscribe(() => this.getAllFournisseurs())
  }
  /*open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }*/
}
