import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalCenterPage } from './personal-center.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalCenterPageRoutingModule {}
