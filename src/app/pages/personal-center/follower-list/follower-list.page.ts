import { AuthService } from './../../../services/auth/auth.service';
import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.page.html',
  styleUrls: ['./follower-list.page.scss'],
})
export class FollowerListPage implements OnInit {
  userInfo;
  token;
  followers;

  constructor(
    private navParams: NavParams,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
    });
    console.log(this.followers);
  }

  doClose() {
    this.navParams.data.modal.dismiss();
  }
  
}
