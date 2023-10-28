import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsArchiveRoutingModule } from './events-archive-routing.module';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventsArchiveRoutingModule,FeatherIconModule
  ]
})
export class EventsArchiveModule { }
