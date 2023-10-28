import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorTicketsRoutingModule } from './instructor-tickets-routing.module';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { ObJectifListComponent } from './objectif-list.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InstructorTicketsRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorTicketsModule { }
