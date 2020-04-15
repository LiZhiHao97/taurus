import { SharedModule } from './../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MessageItemComponent } from './message-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MessageItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  exports: [
    MessageItemComponent
  ]
})
export class MessageItemModule { }
