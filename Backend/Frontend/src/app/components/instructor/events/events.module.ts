import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { EventFormComponent } from './event-form/event-form.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [
    EventsComponent,
    EventFormComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,FeatherIconModule,NgbModalModule,FormsModule
  ]
})
export class EventsModule { }
