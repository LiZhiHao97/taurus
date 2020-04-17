import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharePreviewComponent } from './share-preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SharePreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    SharePreviewComponent
  ]
})
export class SharePreviewModule { }
