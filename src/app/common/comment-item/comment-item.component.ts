import { CommentService } from './../../services/comment/comment.service';
import { ToastService } from './../../services/toast/toast.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() data;
  @Input() token;
  isShowModal = false;
  isShowModal2 = false;
  replyContent: string = '';
  isOpenEmojiPicker = false;
  subComments: any = [];
  curId: string = '';

  constructor(
    private toastService: ToastService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.commentService.getSubComments(this.data.topicId, this.data.answerId, this.data._id).subscribe(res => {
      this.subComments = res;
      console.log(this.subComments);
    });
  }
  onClose() {
    this.isShowModal = false;
    this.replyContent = '';
  }

  showModal() {
    this.isShowModal = true;
  }

  showModal2(id) {
    this.isShowModal2 = true;
    this.curId = id;
  }

  onChanged(content) {
    this.replyContent = this.replyContent + content;
  }

  switchEmojiPicker() {
    this.isOpenEmojiPicker = !this.isOpenEmojiPicker;
  }
  reply() {
    if (!this.replyContent.length) {
      return this.toastService.presentToast('回复内容不得为空');
    }
    const postData = { content: this.replyContent, rootCommentId: this.data._id, replyTo: this.data.commentator._id };
    this.commentService.comment(postData, this.data.topicId, this.data.answerId, this.token).subscribe(res => {
      this.toastService.presentToast('回复成功');
      this.isShowModal = false;
      this.replyContent = '';
      this.subComments = [...this.subComments, res];
    })
  }

  subReply() {
    if (!this.replyContent.length) {
      return this.toastService.presentToast('回复内容不得为空');
    }
    const postData = { content: this.replyContent, rootCommentId: this.data._id, replyTo: this.curId };
    this.commentService.comment(postData, this.data.topicId, this.data.answerId, this.token).subscribe(res => {
      this.toastService.presentToast('回复成功');
      this.isShowModal2 = false;
      this.replyContent = '';
      this.subComments = [...this.subComments, res];
    })
  }
}
