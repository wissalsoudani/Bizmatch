import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogMasonryComponent } from './blog-masonry.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', component: BlogMasonryComponent },
  { path: 'event-details/:id', component: EventDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogMasonryRoutingModule { }
