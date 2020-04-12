import { TopicPreviewModule } from './../../../common/topic-preview/topic-preview.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackPageRoutingModule } from './track-routing.module';

import { TrackPage } from './track.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackPageRoutingModule,
    TopicPreviewModule
  ],
  declarations: [TrackPage]
})
export class TrackPageModule {}
