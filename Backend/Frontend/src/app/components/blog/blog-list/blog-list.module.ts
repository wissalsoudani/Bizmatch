import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListRoutingModule } from './blog-list-routing.module';
import { BlogListComponent } from './blog-list.component';
import { FullCalendarModule } from '@fullcalendar/angular';
// calendar.component.ts
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';
import { FormsModule } from '@angular/forms';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    BlogListComponent,
    MeetingFormComponent
  ],
  imports: [
    CommonModule,
    BlogListRoutingModule ,FormsModule,FeatherIconModule,
    FullCalendarModule ]
})
export class BlogListModule { }
