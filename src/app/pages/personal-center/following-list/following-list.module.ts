import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowingListPageRoutingModule } from './following-list-routing.module';

import { FollowingListPage } from './following-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowingListPageRoutingModule
  ],
  declarations: [FollowingListPage]
})
export class FollowingListPageModule {}
