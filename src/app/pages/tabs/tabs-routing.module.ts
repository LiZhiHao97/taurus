import { MessagePageModule } from './../message/message.module';
import { TabsPage } from './tabs.page';
import { SharePageModule } from './../share/share.module';
import { HomePage } from './../home/home.page';
import { MePageModule } from './../me/me.module';
import { HomePageModule } from '../home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'share',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../share/share.module').then(m => m.SharePageModule)
          }
        ]
      },
      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../message/message.module').then(m => m.MessagePageModule)
          }
        ]
      },
      {
        path: 'me',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../me/me.module').then(m => m.MePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
