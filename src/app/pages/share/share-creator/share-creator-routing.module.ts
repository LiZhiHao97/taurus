import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareCreatorPage } from './share-creator.page';

const routes: Routes = [
  {
    path: '',
    component: ShareCreatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareCreatorPageRoutingModule {}
