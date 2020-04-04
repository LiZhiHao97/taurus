import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTagsPage } from './add-tags.page';

const routes: Routes = [
  {
    path: '',
    component: AddTagsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTagsPageRoutingModule {}
