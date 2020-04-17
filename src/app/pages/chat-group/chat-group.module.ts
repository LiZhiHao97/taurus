import { ChatItemModule } from './../../common/chat-item/chat-item.module';
import { EmojipickerModule } from './../../common/emojipicker/emojipicker.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatGroupPageRoutingModule } from './chat-group-routing.module';

import { ChatGroupPage } from './chat-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatGroupPageRoutingModule,
    SharedModule,
    EmojipickerModule,
    ChatItemModule
  ],
  declarations: [ChatGroupPage]
})
export class ChatGroupPageModule {}
