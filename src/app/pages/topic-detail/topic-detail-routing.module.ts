import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicDetailPage } from './topic-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TopicDetailPage
  },
  {
    path: 'answer-creator',
    loadChildren: () => import('./answer-creator/answer-creator.module').then( m => m.AnswerCreatorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicDetailPageRoutingModule {}
