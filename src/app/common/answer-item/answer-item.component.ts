import { ToastService } from './../../services/toast/toast.service';
import { StorageService } from './../../services/storage/storage.service';
import { AuthConstants } from './../../config/auth-constants';
import { UserService } from './../../services/user/user.service';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.scss'],
})
export class AnswerItemComponent implements OnInit {
  @Input() data;
  userInfo;
  token;
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private storageService: StorageService,
    private toastService: ToastService
  ) { }

  ngOnInit() { 
    const previewContent = this.data.content.replace(/<img(.*?)>/g, "[图片]")
    this.data = {...this.data, content: previewContent};

    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
    });
  }


  followUser() {
    this.userService.follow(this.data.answerer._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      newUserInfo.following.push(this.data.answerer._id);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('关注成功');
    });
  }

  unfollowUser() {
    this.userService.unfollow(this.data.answerer._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      const index = newUserInfo.following.indexOf(this.data.answerer._id);
      newUserInfo.following.splice(index, 1);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('取消关注成功');
    });
  }

  likingAnswers() {
    this.userService.likingAnswers(this.data._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      newUserInfo.likingAnswers.push(this.data._id);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('点赞成功');


      const newData = JSON.parse(JSON.stringify(this.data));
      newData.voteCount ++;
      this.data = newData;
    });
  }

  unlikingAnswers() {
    this.userService.unlikingAnswers(this.data._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      const index = newUserInfo.likingAnswers.indexOf(this.data._id);
      newUserInfo.likingAnswers.splice(index, 1);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('取消点赞');

      const newData = JSON.parse(JSON.stringify(this.data));
      newData.voteCount --;
      this.data = newData;
    });
  }

  gotoAnswerDetailPage() {
    this.router.navigate([`/topic/${this.data.topicId}/answer-detail/${this.data._id}`]);
  }

  gotoPersonalCenter(id) {
    this.router.navigate([`/personal-center/${id}`]);
  }
}
