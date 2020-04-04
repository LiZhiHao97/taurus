import { AnswerPreviewModule } from '../../common/answer-preview/answer-preview.module';
import { AddTagsPage } from './topic-creator/add-tags/add-tags.page';
import { TopicCreatorPage } from './topic-creator/topic-creator.page';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    AnswerPreviewModule
  ],
  declarations: [
    HomePage,
    TopicCreatorPage,
    AddTagsPage,
  ],
  entryComponents: [
    TopicCreatorPage,
    AddTagsPage
  ],
})
export class HomePageModule {}
