import { ShareCommentItemModule } from './../../common/share-comment-item/share-comment-item.module';
import { EmojipickerModule } from './../../common/emojipicker/emojipicker.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareDetailPageRoutingModule } from './share-detail-routing.module';

import { ShareDetailPage } from './share-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareDetailPageRoutingModule,
    SharedModule,
    EmojipickerModule,
    ShareCommentItemModule
  ],
  declarations: [ShareDetailPage]
})
export class ShareDetailPageModule {}
