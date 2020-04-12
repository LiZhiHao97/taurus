import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TopicCreatorPageRoutingModule } from './topic-creator-routing.module';
import { TopicCreatorPage } from './topic-creator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicCreatorPageRoutingModule
  ],
  declarations: [
    TopicCreatorPage
  ]
})
export class TopicCreatorPageModule {}
