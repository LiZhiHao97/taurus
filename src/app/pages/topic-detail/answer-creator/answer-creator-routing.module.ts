import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerCreatorPage } from './answer-creator.page';

const routes: Routes = [
  {
    path: '',
    component: AnswerCreatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerCreatorPageRoutingModule {}
