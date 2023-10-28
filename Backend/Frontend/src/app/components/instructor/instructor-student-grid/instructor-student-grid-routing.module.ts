import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorStudentGridComponent } from './instructor-student-grid.component';
import { BlogListComponent } from '../../blog/blog-list/blog-list.component';
import { BlogGridComponent } from '../../blog/blog-grid/blog-grid.component';
 

const routes: Routes = [{ path: '', component: InstructorStudentGridComponent},
 
 
 
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorStudentGridRoutingModule { }
