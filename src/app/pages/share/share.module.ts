import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharePageRoutingModule } from './share-routing.module';

import { SharePage } from './share.page';
// import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharePageRoutingModule,
    // NgxMasonryModule
  ],
  declarations: [SharePage]
})
export class SharePageModule {}
