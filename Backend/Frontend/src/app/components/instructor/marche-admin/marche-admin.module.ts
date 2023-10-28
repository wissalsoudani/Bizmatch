import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcheAdminComponent } from './marche-admin.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { MarcheAdminRoutingModule } from './marche-admin-routing.module';

@NgModule({
  declarations: [MarcheAdminComponent],
  imports: [CommonModule,  FeatherIconModule, MarcheAdminRoutingModule],
  exports: [MarcheAdminComponent]
})
export class MarcheAdminModule { }
