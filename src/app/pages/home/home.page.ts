import { Router } from '@angular/router';
import { TopicCreatorPage } from './topic-creator/topic-creator.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  testData = {
    topicTitle: '孙丰是狗吗？',
    answerContent: '泻药，人在美国，刚下飞机，经过大量数据检测，孙丰的DNA序列与狗有99%的相似度，所以我们可以立即推，孙丰就是一条狗，这是科学严谨证明的结果了。如果大家有什么想法的话，欢迎给我留言。',
    operation: '回答了问题',
    operator: {
      name: '该用户已成仙',
      avatar_url: 'http://localhost:8000/uploads/upload_d99061819d914cc478379980a4af9876.jpg'
    },
    voteCount: 998,
    commentCount: 1024,
    time: '1小时前',
    answerId: '5e7868613687b1dcb31cb654',
    topicId: '5e76151b687e4a83e1d3009e'
  }
  index = 0;
  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }

  async createTopic() {
    const modal = await this.modalController.create({
      component: TopicCreatorPage
    });
    return await modal.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  gotoSearchPage() {
    this.router.navigate(['/search']);
  }

}
