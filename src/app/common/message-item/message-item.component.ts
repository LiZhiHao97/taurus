import { ModalService } from 'ng-zorro-antd-mobile';
import { ToastService } from './../../services/toast/toast.service';
import { MessageService } from './../../services/message/message.service';
import { Router } from '@angular/router';
import { Util } from './../../util';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
})
export class MessageItemComponent implements OnInit {
  @Input() data;
  @Input() userInfo;
  @Input() token;
  getDateDiff = Util.getDateDiff;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private toastService: ToastService,
    private _modal: ModalService,
  ) { }

  ngOnInit() {}

  gotoAnswerDetailPage() {
    this.router.navigate([`topic/${this.data.topicId._id}/answer-detail/${this.data.answerId}`]);
  }

  gotoTopicDetailPage() {
    this.router.navigate([`/topic-detail/${this.data.topicId._id}`]);
  }

  gotoPersonalCenter() {
    this.router.navigate([`/personal-center/${this.data.sender._id}`]);
  }

  read() {
    this.messageService.read(this.data._id, this.token).subscribe(res => {
      const newData = JSON.parse(JSON.stringify(this.data));
      newData.isRead = true;
      this.data = newData;
      this.toastService.presentToast('已标为已读');
    });
  }

  showAlert() {
    this._modal.alert('该操作会删除消息', '是否继续', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: () => this.delete() }
    ]);
  }

  delete() {
    this.messageService.delete(this.data._id, this.token).subscribe(res => {
      this.data = undefined;
      this.toastService.presentToast('删除成功');
    });
  }
}
