import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowingListPage } from './following-list.page';

const routes: Routes = [
  {
    path: '',
    component: FollowingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowingListPageRoutingModule {}
