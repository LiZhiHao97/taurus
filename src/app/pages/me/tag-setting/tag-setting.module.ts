import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagSettingPageRoutingModule } from './tag-setting-routing.module';

import { TagSettingPage } from './tag-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagSettingPageRoutingModule,
    SharedModule
  ],
  declarations: [TagSettingPage]
})
export class TagSettingPageModule {}
