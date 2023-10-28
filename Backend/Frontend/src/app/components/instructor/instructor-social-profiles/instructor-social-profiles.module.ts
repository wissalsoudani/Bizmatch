import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorSocialProfilesRoutingModule } from './instructor-social-profiles-routing.module';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { BesoinoffreAddComponent } from './besoinoffre-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InstructorSocialProfilesRoutingModule,
    FeatherIconModule,FormsModule
  ]
})
export class InstructorSocialProfilesModule { }
