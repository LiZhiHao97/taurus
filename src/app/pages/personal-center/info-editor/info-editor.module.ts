import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoEditorPageRoutingModule } from './info-editor-routing.module';

import { InfoEditorPage } from './info-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoEditorPageRoutingModule
  ],
  declarations: [InfoEditorPage]
})
export class InfoEditorPageModule {}
