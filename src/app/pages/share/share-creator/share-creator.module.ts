import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareCreatorPageRoutingModule } from './share-creator-routing.module';

import { ShareCreatorPage } from './share-creator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareCreatorPageRoutingModule
  ],
  declarations: [ShareCreatorPage]
})
export class ShareCreatorPageModule {}
