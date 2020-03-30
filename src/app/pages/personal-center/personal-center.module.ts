import { InfoEditorPage } from './info-editor/info-editor.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalCenterPageRoutingModule } from './personal-center-routing.module';

import { PersonalCenterPage } from './personal-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalCenterPageRoutingModule
  ],
  declarations: [PersonalCenterPage, InfoEditorPage],
  entryComponents: [InfoEditorPage],
})
export class PersonalCenterPageModule {}
