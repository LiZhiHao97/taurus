import { CommentService } from './../../services/comment/comment.service';
import { AuthConstants } from './../../config/auth-constants';
import { UserService } from './../../services/user/user.service';
import { StorageService } from './../../services/storage/storage.service';
import { ToastService } from './../../services/toast/toast.service';
import { AuthService } from './../../services/auth/auth.service';
import { Util } from './../../util';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from './../../services/share/share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-detail',
  templateUrl: './share-detail.page.html',
  styleUrls: ['./share-detail.page.scss'],
})
export class ShareDetailPage implements OnInit {
  shareData;
  getDateDiff = Util.getDateDiff;
  userInfo;
  token;
  comments: any = [];


  commentContent: string = '';
  isOpenEmojiPicker = false;

  constructor(
    private shareService: ShareService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private toastService: ToastService,
    private storageService: StorageService,
    private userService: UserService,
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
      console.log(this.userInfo);
    });

    this.activatedRoute.params.subscribe(params => {
      this.shareService.findById(params.id).subscribe(res => {
        console.log(res);
        this.shareData = res;
      });

      this.commentService.getShareComments(params.id).subscribe(res => {
        console.log(res);
        this.comments = res;
      })
    });
  }

  beforeChange(event) {
    console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event) {
    console.log('slide to ' + event);
  }

  followUser() {
    this.userService.follow(this.shareData.author._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      newUserInfo.following.push(this.shareData.author._id);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('关注成功');
    });
  }

  unfollowUser() {
    this.userService.unfollow(this.shareData.author._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      const index = newUserInfo.following.indexOf(this.shareData.author._id);
      newUserInfo.following.splice(index, 1);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('取消关注成功');
    });
  }

  likingShares() {
    this.userService.likingShares(this.shareData._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      newUserInfo.likingShares.push(this.shareData._id);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('点赞成功');

      const newData = JSON.parse(JSON.stringify(this.shareData));
      newData.voteCount ++;
      this.shareData = newData;
    });
  }

  unlikingShares() {
    this.userService.unlikingShares(this.shareData._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      const index = newUserInfo.likingShares.indexOf(this.shareData._id);
      newUserInfo.likingShares.splice(index, 1);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('取消点赞');

      const newData = JSON.parse(JSON.stringify(this.shareData));
      newData.voteCount --;
      this.shareData = newData;
    });
  }

  switchEmojiPicker() {
    this.isOpenEmojiPicker = !this.isOpenEmojiPicker;
  }

  onChanged(content) {
    this.commentContent = this.commentContent + content;
  }

  comment() {
    if (!this.commentContent.length) {
      return this.toastService.presentToast('评论内容不得为空');
    }
    this.commentService.shareComment({ content: this.commentContent }, this.shareData._id, this.token).subscribe(res => {
      const newComments = JSON.parse(JSON.stringify(this.comments));
      newComments.push(res);
      this.comments = newComments;
      this.toastService.presentToast('评论成功');
      console.log(this.comments);
      this.isOpenEmojiPicker = false;
      this.commentContent = '';
    });
  }

  gotoPersonalCenter() {
    this.router.navigate([`/personal-center/${this.shareData.author._id}`]);
  }
}
