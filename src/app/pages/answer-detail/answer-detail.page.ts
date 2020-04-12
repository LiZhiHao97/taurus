import { AuthConstants } from './../../config/auth-constants';
import { StorageService } from './../../services/storage/storage.service';
import { UserService } from './../../services/user/user.service';
import { ToastService } from './../../services/toast/toast.service';
import { CommentService } from './../../services/comment/comment.service';
import { AuthService } from './../../services/auth/auth.service';
import { AnswerService } from './../../services/answer/answer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.page.html',
  styleUrls: ['./answer-detail.page.scss'],
})
export class AnswerDetailPage implements OnInit {
  data;
  userInfo;
  token;
  comments;
  commentContent: string = '';
  isOpenEmojiPicker = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private answerService: AnswerService,
    private authService: AuthService,
    private commentService: CommentService,
    private toastService: ToastService,
    private userService: UserService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.answerService.findById(params.tid, params.aid).subscribe(res => {
        this.data = res;
        this.commentService.getComments(this.data.topicId._id, this.data._id).subscribe(res2 => {
          this.comments = res2;
          console.log(this.comments);
        });
      });
    });

    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
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
    this.commentService.comment(
      {content: this.commentContent},
      this.data.topicId._id, this.data._id,
      this.token
      ).subscribe(res => {
      this.toastService.presentToast('评论成功');
      this.comments = [...this.comments, res];
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

  gotoPersonalCenter(id) {
    this.router.navigate([`/personal-center/${id}`]);
  }
}
