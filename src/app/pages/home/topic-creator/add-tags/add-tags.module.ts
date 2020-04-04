import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTagsPageRoutingModule } from './add-tags-routing.module';

import { AddTagsPage } from './add-tags.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTagsPageRoutingModule
  ],
  declarations: [AddTagsPage]
})
export class AddTagsPageModule {}
