import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsListRoutingModule } from './students-list-routing.module';
import { StudentsListComponent } from './students-list.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsListComponent
  ],
  imports: [
    CommonModule,
    StudentsListRoutingModule,
    FeatherIconModule,
    FormsModule
  ]
})
export class StudentsListModule { }
