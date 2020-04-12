import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowerListPage } from './follower-list.page';

const routes: Routes = [
  {
    path: '',
    component: FollowerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowerListPageRoutingModule {}
