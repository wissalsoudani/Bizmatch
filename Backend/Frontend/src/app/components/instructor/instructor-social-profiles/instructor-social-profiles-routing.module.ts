import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BesoinoffreAddComponent } from './besoinoffre-add.component';

const routes: Routes = [{ path: '', component: BesoinoffreAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorSocialProfilesRoutingModule { }
