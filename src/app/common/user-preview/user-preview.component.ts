import { AuthConstants } from './../../config/auth-constants';
import { ToastService } from './../../services/toast/toast.service';
import { StorageService } from './../../services/storage/storage.service';
import { AuthService } from './../../services/auth/auth.service';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
})
export class UserPreviewComponent implements OnInit {
  @Input() data;
  @Input() userInfo;
  @Input() token;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
  ) { }

  ngOnInit() {}

  followUser() {
    this.userService.follow(this.data._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      newUserInfo.following.push(this.data._id);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('关注成功');
    });
  }

  unfollowUser() {
    this.userService.unfollow(this.data._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      const index = newUserInfo.following.indexOf(this.data._id);
      newUserInfo.following.splice(index, 1);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('取消关注成功');
    });
  }
  
}
