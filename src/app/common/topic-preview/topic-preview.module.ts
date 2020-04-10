import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TopicPreviewComponent } from './topic-preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TopicPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    TopicPreviewComponent
  ]
})
export class TopicPreviewModule { }
