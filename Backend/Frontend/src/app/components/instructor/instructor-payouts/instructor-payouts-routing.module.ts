import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BesoinoffreEditComponent } from './besoinoffre-edit.component';

const routes: Routes = [{ path: '', component: BesoinoffreEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorPayoutsRoutingModule { }
