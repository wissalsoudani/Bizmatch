import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorComponent } from './instructor.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { BlogModule } from '../blog/blog.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsArchiveComponent } from './events-archive/events-archive.component';
 


@NgModule({
  declarations: [
    InstructorComponent,
    EventsArchiveComponent,
 
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    FeatherIconModule,
    SharedModule,BlogModule,NgbModule
  ]
})
export class InstructorModule { }
