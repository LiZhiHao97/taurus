import { AuthService } from './../../../services/auth/auth.service';
import { UserService } from './../../../services/user/user.service';
import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.page.html',
  styleUrls: ['./following-list.page.scss'],
})
export class FollowingListPage implements OnInit {
  userInfo;
  token;
  following;
  id;
  constructor(
    private navParams: NavParams,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userService.listFollowing(this.id).subscribe(res => {
      this.following = res;
      console.log(this.following);
    });
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
    });
  }

  doClose() {
    this.navParams.data.modal.dismiss();
  }
 
}
