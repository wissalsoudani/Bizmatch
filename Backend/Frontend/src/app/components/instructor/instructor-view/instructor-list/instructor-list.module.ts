import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorListRoutingModule } from './instructor-list-routing.module';
import { InstructorListComponent } from './instructor-list.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    InstructorListComponent
  ],
  imports: [
    CommonModule,
    InstructorListRoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class InstructorListModule { }
