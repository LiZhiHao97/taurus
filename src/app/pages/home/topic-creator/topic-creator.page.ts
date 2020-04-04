import { AuthService } from './../../../services/auth/auth.service';
import { TopicService } from './../../../services/topic/topic.service';
import { ToastService } from './../../../services/toast/toast.service';
import { AddTagsPage } from './add-tags/add-tags.page';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-topic-creator',
  templateUrl: './topic-creator.page.html',
  styleUrls: ['./topic-creator.page.scss'],
})
export class TopicCreatorPage implements OnInit {
  title = '';
  desc = '';
  tags = [];
  token;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private toastService: ToastService,
    private topicService: TopicService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.token = res.token;
    });
  }

  doClose() {
    this.navParams.data.modal.dismiss();
  }

  create() {
    const title = this.title;
    const description = this.desc;
    const labels = [];
    for (let item of this.tags) {
      labels.push(item._id);
    }

    if (!title.length) {
      return this.toastService.presentToast('标题不得为空');
    }

    if (!description.length) {
      return this.toastService.presentToast('简介不得为空');
    }

    if (!labels.length) {
      return this.toastService.presentToast('请至少选择一个标签');
    }

    this.topicService.create({ title, description, labels }, this.token).subscribe(res => {
      this.toastService.presentToast('创建成功');
      this.navParams.data.modal.dismiss();
    }, (err) => {
      this.toastService.presentToast('创建失败');
    })
  }

  async addTags() {
    const modal = await this.modalController.create({
      component: AddTagsPage,
      componentProps: {
        tags: this.tags
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.tags = [...data.tags];
  }

  onClose() {
    console.log('onClose');
  }

  afterClose() {
    console.log('afterClose');
  }

  deleteTag(item) {
    const newTags = this.tags;
    const index = this.tags.indexOf(item);
    newTags.splice(index, 1);
    this.tags = newTags;
  }
}
