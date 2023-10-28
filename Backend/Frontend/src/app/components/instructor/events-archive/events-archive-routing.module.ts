import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsArchiveComponent } from './events-archive.component';

const routes: Routes = [{ path: '', component: EventsArchiveComponent},]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsArchiveRoutingModule { }
