import { AnswerCreatorPage } from './answer-creator/answer-creator.page';
import { ModalController } from '@ionic/angular';
import { AnswerService } from './../../services/answer/answer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from './../../services/topic/topic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.page.html',
  styleUrls: ['./topic-detail.page.scss'],
})
export class TopicDetailPage implements OnInit {
  topicData;
  answers: any = [];
  constructor(
    private topicService: TopicService,
    private answerService: AnswerService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.topicService.findById(params.id).subscribe(res => {
        this.topicData = res;
        this.answerService.find(this.topicData._id, 1).subscribe(res2 => {
          this.answers = res2;
        });
      });
    });
  }

  follow() {
    console.log('follow');
  }

  async createTopic() {
    const modal = await this.modalController.create({
      component: AnswerCreatorPage,
      componentProps: {
        topicId: this.topicData._id,
        answers: this.answers
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.answers = [...data.answers];
  }
}
