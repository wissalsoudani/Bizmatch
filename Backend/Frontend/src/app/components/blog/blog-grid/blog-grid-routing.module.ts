import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridComponent } from './blog-grid.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';

const routes: Routes = [{ path: '', component: BlogGridComponent }, {path: 'blog-details/:eventId', component: BlogDetailsComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogGridRoutingModule { }
