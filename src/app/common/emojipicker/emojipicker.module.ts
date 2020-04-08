import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojipickerComponent } from './emojipicker.component';



@NgModule({
  declarations: [
    EmojipickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    EmojipickerComponent
  ]
})
export class EmojipickerModule { }
