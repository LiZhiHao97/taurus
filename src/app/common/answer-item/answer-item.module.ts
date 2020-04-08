import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AnswerItemComponent } from './answer-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AnswerItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    AnswerItemComponent
  ]
})
export class AnswerItemModule { }
