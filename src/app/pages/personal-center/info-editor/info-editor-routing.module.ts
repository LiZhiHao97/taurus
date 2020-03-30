import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoEditorPage } from './info-editor.page';

const routes: Routes = [
  {
    path: '',
    component: InfoEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoEditorPageRoutingModule {}
