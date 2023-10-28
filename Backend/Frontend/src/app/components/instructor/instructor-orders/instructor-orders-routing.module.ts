import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectifAddComponent } from './objectif-add.component';

const routes: Routes = [{ path: '', component: ObjectifAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorOrdersRoutingModule { }
