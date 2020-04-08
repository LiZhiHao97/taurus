import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerDetailPage } from './answer-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AnswerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerDetailPageRoutingModule {}
