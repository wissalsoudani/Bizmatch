import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorStudentGridRoutingModule } from './instructor-student-grid-routing.module';
import { InstructorStudentGridComponent } from './instructor-student-grid.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { BlogListRoutingModule } from '../../blog/blog-list/blog-list-routing.module';
import { BlogModule } from '../../blog/blog.module';
import { BlogRoutingModule } from '../../blog/blog-routing.module';
import { BlogListModule } from '../../blog/blog-list/blog-list.module'; 


@NgModule({
  declarations: [
    InstructorStudentGridComponent,
 
  ],
  imports: [
    CommonModule,
    InstructorStudentGridRoutingModule,BlogListRoutingModule,BlogModule,BlogRoutingModule,BlogListModule,
    FeatherIconModule
  ]
})
export class InstructorStudentGridModule { }
