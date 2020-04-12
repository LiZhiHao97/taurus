import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFavorPage } from './my-favor.page';

const routes: Routes = [
  {
    path: '',
    component: MyFavorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFavorPageRoutingModule {}
