import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MePage } from './me.page';

const routes: Routes = [
  {
    path: '',
    component: MePage
  },
  {
    path: 'tag-setting',
    loadChildren: () => import('./tag-setting/tag-setting.module').then( m => m.TagSettingPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'participation',
    loadChildren: () => import('./participation/participation.module').then( m => m.ParticipationPageModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'my-favor',
    loadChildren: () => import('./my-favor/my-favor.module').then( m => m.MyFavorPageModule)
  },
  {
    path: 'track',
    loadChildren: () => import('./track/track.module').then( m => m.TrackPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MePageRoutingModule {}
