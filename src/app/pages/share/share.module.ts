import { SharePreviewModule } from './../../common/share-preview/share-preview.module';
import { SharedModule } from './../../shared/shared.module';
import { EditorModule } from './../../common/editor/editor.module';
import { ShareCreatorPage } from './share-creator/share-creator.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharePageRoutingModule } from './share-routing.module';

import { SharePage } from './share.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharePageRoutingModule,
    EditorModule,
    SharedModule,
    SharePreviewModule
  ],
  declarations: [
    SharePage,
    ShareCreatorPage
  ],
  entryComponents: [
    ShareCreatorPage
  ]
})
export class SharePageModule {}
