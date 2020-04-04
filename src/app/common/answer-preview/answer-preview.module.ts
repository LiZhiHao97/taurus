import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AnswerPreviewComponent } from './answer-preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AnswerPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    AnswerPreviewComponent
  ]
})
export class AnswerPreviewModule { }
