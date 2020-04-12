import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipationPage } from './participation.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipationPageRoutingModule {}
