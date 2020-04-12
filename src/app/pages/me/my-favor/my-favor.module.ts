import { AnswerPreviewModule } from './../../../common/answer-preview/answer-preview.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFavorPageRoutingModule } from './my-favor-routing.module';

import { MyFavorPage } from './my-favor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFavorPageRoutingModule,
    AnswerPreviewModule
  ],
  declarations: [MyFavorPage]
})
export class MyFavorPageModule {}
