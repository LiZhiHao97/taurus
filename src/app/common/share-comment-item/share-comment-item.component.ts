import { CommentService } from './../../services/comment/comment.service';
import { ToastService } from './../../services/toast/toast.service';
import { Util } from './../../util';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-share-comment-item',
  templateUrl: './share-comment-item.component.html',
  styleUrls: ['./share-comment-item.component.scss'],
})
export class ShareCommentItemComponent implements OnInit {
  @Input() data;
  @Input() authorId;
  @Input() userInfo;
  @Input() token;
  getDateDiff = Util.getDateDiff;


  isShowModal = false;
  isShowModal2 = false;
  replyContent: string = '';
  isOpenEmojiPicker = false;
  subComments: any = [];
  curId: string = '';
  curName: string = '';

  constructor(
    private router: Router,
    private toastService: ToastService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.commentService.getSubShareComments(this.data.shareId, this.data._id).subscribe(res => {
      this.subComments = res;
      console.log(this.subComments);
    })
  }

  gotoPersonalCenter(id) {
    this.router.navigate([`personal-center/${id}`]);
  }

  onClose() {
    this.isShowModal = false;
    this.replyContent = '';
  }

  showModal() {
    this.isShowModal = true;
  }

  showModal2(id, name) {
    this.isShowModal2 = true;
    this.curId = id;
    this.curName = name;
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
    this.commentService.shareComment(postData, this.data.shareId, this.token).subscribe(res => {
      this.toastService.presentToast('回复成功');
      this.isShowModal = false;
      this.replyContent = '';
      this.subComments = [...this.subComments, res];
    });
  }

  subReply() {
    if (!this.replyContent.length) {
      return this.toastService.presentToast('回复内容不得为空');
    }
    const postData = { content: this.replyContent, rootCommentId: this.data._id, replyTo: this.curId };
    this.commentService.shareComment(postData, this.data.shareId, this.token).subscribe(res => {
      this.toastService.presentToast('回复成功');
      this.isShowModal2 = false;
      this.replyContent = '';
      this.subComments = [...this.subComments, res];
    });
  }
}
