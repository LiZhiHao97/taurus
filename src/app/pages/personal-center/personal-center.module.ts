import { UserPreviewModule } from './../../common/user-preview/user-preview.module';
import { FollowingListPage } from './following-list/following-list.page';
import { FollowerListPage } from './follower-list/follower-list.page';
import { AnswerPreviewModule } from './../../common/answer-preview/answer-preview.module';
import { SharedModule } from './../../shared/shared.module';
import { InfoEditorPage } from './info-editor/info-editor.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalCenterPageRoutingModule } from './personal-center-routing.module';

import { PersonalCenterPage } from './personal-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalCenterPageRoutingModule,
    SharedModule,
    AnswerPreviewModule,
    UserPreviewModule
  ],
  declarations: [
    PersonalCenterPage,
    InfoEditorPage,
    FollowerListPage,
    FollowingListPage
  ],
  entryComponents: [
    InfoEditorPage,
    FollowerListPage,
    FollowingListPage
  ],
})
export class PersonalCenterPageModule {}
