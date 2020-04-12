import { TopicPreviewModule } from './../../../common/topic-preview/topic-preview.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipationPageRoutingModule } from './participation-routing.module';

import { ParticipationPage } from './participation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipationPageRoutingModule,
    TopicPreviewModule
  ],
  declarations: [ParticipationPage]
})
export class ParticipationPageModule {}
