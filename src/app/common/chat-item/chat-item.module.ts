import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChatItemComponent } from './chat-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ChatItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    ChatItemComponent
  ]
})
export class ChatItemModule { }
