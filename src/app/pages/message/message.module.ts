import { SharedModule } from './../../shared/shared.module';
import { MessageItemModule } from './../../common/message-item/message-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagePageRoutingModule,
    MessageItemModule,
    SharedModule
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
