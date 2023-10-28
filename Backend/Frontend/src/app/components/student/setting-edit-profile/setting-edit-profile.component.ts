import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Entreprise } from 'src/app/models/Entreprise/entreprise';
import { LoginService } from 'src/app/services/login.service';
import { MiseenrelationService } from 'src/app/services/miseenrelation.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-setting-edit-profile',
  templateUrl: './setting-edit-profile.component.html',
  styleUrls: ['./setting-edit-profile.component.scss']
})
export class SettingEditProfileComponent implements OnInit {
  public routes = routes;
  selected = 'option1';
  userEmail!:string;
  submitted=false;
  companyForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private miseenrelationService: MiseenrelationService) { }

  ngOnInit(): void {
    this.companyForm=this.formBuilder.group({
      nom:[''],
      secteur: [''] ,
      telephone:  0,
      description:[''],
      adresse: ['']
    });
    this.userEmail=sessionStorage.getItem('user') as string;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.companyForm.invalid) {
      return; // Si le formulaire est invalide, ne pas soumettre
    }

    const newCompany: Entreprise = { ...this.companyForm.value };
    this.miseenrelationService.addEntreprise(newCompany).subscribe(
      (data) => {
        console.log(data);
        this.companyForm.reset();
        this.submitted = false;
        this.miseenrelationService.setEntrepriseenUser(this.userEmail,newCompany.nom).subscribe(
          () => {
            console.log('L\'entreprise a été associée à l\'utilisateur avec succès.');

          },
          (error) => {
            console.error('Une erreur s\'est produite lors de l\'association de l\'entreprise à l\'utilisateur :', error);

          }
        );

      },
      (error) => {
        console.error(error);
      }
    );
  }
}
