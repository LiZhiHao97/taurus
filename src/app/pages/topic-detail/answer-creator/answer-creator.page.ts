import { MessageService } from './../../../services/message/message.service';
import { AuthService } from './../../../services/auth/auth.service';
import { AnswerService } from './../../../services/answer/answer.service';
import { ToastService } from './../../../services/toast/toast.service';
import { NavParams } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorComponent } from 'src/app/common/editor/editor.component';

@Component({
  selector: 'app-answer-creator',
  templateUrl: './answer-creator.page.html',
  styleUrls: ['./answer-creator.page.scss'],
})
export class AnswerCreatorPage implements OnInit {
  token;
  topicData;
  userInfo;
  answers = [];
  
  @ViewChild(EditorComponent, {static: false}) editor: EditorComponent;
  constructor(
    private navParams: NavParams,
    private toastService: ToastService,
    private answerService: AnswerService,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.token = res.token;
      this.userInfo = res.user;
    });
  }

  doClose() {
    this.navParams.data.modal.dismiss({
      answers: undefined
    });
  }

  create() {
    const topicContent = this.editor.clickHandle();
    console.log(topicContent);
    if (topicContent === '<p><br></p>') {
        return this.toastService.presentToast('回答内容不得为空');
    }
    this.answerService.create({content: topicContent}, this.topicData._id, this.token).subscribe(res => {
      this.toastService.presentToast('回答成功');

      this.messageService.create({
        content: '回答了你发起的话题',
        sender: this.userInfo._id,
        receiver: this.topicData.sponsor._id,
        topicId: this.topicData._id,
        answerId: res['_id']
      }, this.token).subscribe(res => {
        console.log(res);
      })

      const newAnswers = [...this.answers, res];
      this.navParams.data.modal.dismiss({
        answers: newAnswers
      });
    });
  }

  PostData(event): void {
    console.log(event) ;
  }
 
}
