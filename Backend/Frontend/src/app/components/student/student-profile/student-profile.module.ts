import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudentProfileComponent } from './student-profile.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { BesoinCommercialComponent } from './besoin-commercial/besoin-commercial.component';
import { ServiceCommercialComponent } from './service-commercial/service-commercial.component';
import { StudentProfileRoutingModule } from './student-profile-routing.module';


@NgModule({
  declarations: [
    StudentProfileComponent, ServiceCommercialComponent, BesoinCommercialComponent
  ],
  imports: [
    CommonModule,
    StudentProfileRoutingModule,
    FeatherIconModule,
    NgbModule,
    FormsModule
  ]
})
export class StudentProfileModule { }
