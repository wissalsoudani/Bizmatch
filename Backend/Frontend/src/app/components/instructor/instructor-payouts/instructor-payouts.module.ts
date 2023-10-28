import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorPayoutsRoutingModule } from './instructor-payouts-routing.module';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    InstructorPayoutsRoutingModule,
    FeatherIconModule,
    SharedModule,FormsModule
  ]
})
export class InstructorPayoutsModule { }
