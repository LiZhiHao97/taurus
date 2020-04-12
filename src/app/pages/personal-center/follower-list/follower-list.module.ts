import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowerListPageRoutingModule } from './follower-list-routing.module';

import { FollowerListPage } from './follower-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowerListPageRoutingModule
  ],
  declarations: [FollowerListPage]
})
export class FollowerListPageModule {}
