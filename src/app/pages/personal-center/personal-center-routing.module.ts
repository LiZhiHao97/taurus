import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalCenterPage } from './personal-center.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalCenterPage
  },
  {
    path: 'following-list',
    loadChildren: () => import('./following-list/following-list.module').then( m => m.FollowingListPageModule)
  },
  {
    path: 'follower-list',
    loadChildren: () => import('./follower-list/follower-list.module').then( m => m.FollowerListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalCenterPageRoutingModule {}
