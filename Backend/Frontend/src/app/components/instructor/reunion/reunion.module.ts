import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReunionRoutingModule } from './reunion-routing.module';
import { ReunionComponent } from './reunion.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    ReunionComponent
  ],
  imports: [
    CommonModule,
    ReunionRoutingModule,FeatherIconModule
  ]
})
export class ReunionModule { }
