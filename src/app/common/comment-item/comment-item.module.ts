import { EmojipickerModule } from './../emojipicker/emojipicker.module';
import { SharedModule } from './../../shared/shared.module';
import { CommentItemComponent } from './comment-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EmojipickerModule
  ],
  exports: [
    CommentItemComponent
  ]
})
export class CommentItemModule { }
