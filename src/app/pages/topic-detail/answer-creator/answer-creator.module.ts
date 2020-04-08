import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnswerCreatorPageRoutingModule } from './answer-creator-routing.module';
import { AnswerCreatorPage } from './answer-creator.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnswerCreatorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AnswerCreatorPage]
})
export class AnswerCreatorPageModule {}
