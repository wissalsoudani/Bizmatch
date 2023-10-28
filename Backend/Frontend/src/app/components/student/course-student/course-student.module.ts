import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseStudentRoutingModule } from './course-student-routing.module';
import { CourseStudentComponent } from './course-student.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { BlogListModule } from '../../blog/blog-list/blog-list.module';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    CourseStudentComponent
  ],
  imports: [
    CommonModule,
    CourseStudentRoutingModule,
    FeatherIconModule,BlogListModule,FullCalendarModule
  ]
})
export class CourseStudentModule { }
