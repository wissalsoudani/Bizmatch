import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BesoinoffreListComponent } from './BesoinoffreListComponent';

const routes: Routes = [{ path: '', component: BesoinoffreListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorDashboardRoutingModule { }
