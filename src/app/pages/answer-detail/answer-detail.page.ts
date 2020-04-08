import { ToastService } from './../../services/toast/toast.service';
import { CommentService } from './../../services/comment/comment.service';
import { AuthService } from './../../services/auth/auth.service';
import { AnswerService } from './../../services/answer/answer.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.page.html',
  styleUrls: ['./answer-detail.page.scss'],
})
export class AnswerDetailPage implements OnInit {
  data;
  userDatas;
  comments;
  commentContent: string = '';
  isOpenEmojiPicker = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private answerService: AnswerService,
    private authService: AuthService,
    private commentService: CommentService,
    private toatsService: ToastService
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
      this.userDatas = res;
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
      return this.toatsService.presentToast('评论内容不得为空');
    }
    this.commentService.comment(
      {content: this.commentContent},
      this.data.topicId._id, this.data._id,
      this.userDatas.token
      ).subscribe(res => {
      this.toatsService.presentToast('评论成功');
      this.comments = [...this.comments, res];
    });
  }
}
