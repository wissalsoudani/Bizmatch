import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObJectifListComponent } from './objectif-list.component';

const routes: Routes = [{ path: '', component: ObJectifListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorTicketsRoutingModule { }
