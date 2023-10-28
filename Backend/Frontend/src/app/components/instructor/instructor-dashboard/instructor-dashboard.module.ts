import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorDashboardRoutingModule } from './instructor-dashboard-routing.module';

import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { BesoinoffreListComponent } from './BesoinoffreListComponent';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    InstructorDashboardRoutingModule,
    FeatherIconModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [BesoinoffreListComponent]
})
export class InstructorDashboardModule { }
