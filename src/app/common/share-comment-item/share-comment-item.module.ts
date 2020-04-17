import { EmojipickerModule } from './../emojipicker/emojipicker.module';
import { SharedModule } from './../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ShareCommentItemComponent } from './share-comment-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ShareCommentItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EmojipickerModule
  ],
  exports: [
    ShareCommentItemComponent
  ]
})
export class ShareCommentItemModule { }
