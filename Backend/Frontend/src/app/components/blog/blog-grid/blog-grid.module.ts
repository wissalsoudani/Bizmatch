import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridRoutingModule } from './blog-grid-routing.module';
import { BlogGridComponent } from './blog-grid.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { BlogDetailsModule } from '../blog-details/blog-details.module';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    BlogGridComponent 
  ],
  imports: [
    CommonModule,
    BlogGridRoutingModule,BlogDetailsModule,FeatherIconModule
  ]
})
export class BlogGridModule { }
