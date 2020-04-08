import { EditorModule } from './../../common/editor/editor.module';
import { AnswerCreatorPage } from './answer-creator/answer-creator.page';
import { AnswerItemModule } from '../../common/answer-item/answer-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicDetailPageRoutingModule } from './topic-detail-routing.module';

import { TopicDetailPage } from './topic-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicDetailPageRoutingModule,
    AnswerItemModule,
    EditorModule
  ],
  declarations: [
    TopicDetailPage,
    AnswerCreatorPage
  ],
  entryComponents: [
    AnswerCreatorPage
  ],
})
export class TopicDetailPageModule {}
