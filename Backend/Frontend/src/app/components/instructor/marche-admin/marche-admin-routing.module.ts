import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcheAdminComponent } from './marche-admin.component';

const routes: Routes = [
  { path: '', component: MarcheAdminComponent }
  // Add more routes if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcheAdminRoutingModule { }
