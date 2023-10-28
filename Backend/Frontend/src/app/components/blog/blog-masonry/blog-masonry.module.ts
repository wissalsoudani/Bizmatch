import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogMasonryRoutingModule } from './blog-masonry-routing.module';
import { BlogMasonryComponent } from './blog-masonry.component';
import { BlogDetailsModule } from '../blog-details/blog-details.module';
import { EventDetailsComponent } from './event-details/event-details.component'; 


@NgModule({
  declarations: [
    BlogMasonryComponent,
    EventDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    BlogMasonryRoutingModule,BlogDetailsModule
  ]
})
export class BlogMasonryModule { }
