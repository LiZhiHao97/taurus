import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareDetailPage } from './share-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ShareDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareDetailPageRoutingModule {}
