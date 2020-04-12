import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserPreviewComponent } from './user-preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UserPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    UserPreviewComponent
  ]
})
export class UserPreviewModule { }
