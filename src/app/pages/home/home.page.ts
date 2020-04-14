import { TopicService } from './../../services/topic/topic.service';
import { Router } from '@angular/router';
import { TopicCreatorPage } from './topic-creator/topic-creator.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  recommend: any = [];
  hotRank: any = [];
  index = 0;
  page = 1;
  constructor(
    private modalController: ModalController,
    private router: Router,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.topicService.recommend(this.page).subscribe(res => {
      this.recommend = res;
    });
  }

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    if (item.index === 1) {
      this.topicService.findHot().subscribe(res => {
        this.hotRank = res;
      });
    }
  }

  async createTopic() {
    const modal = await this.modalController.create({
      component: TopicCreatorPage
    });
    return await modal.present();
  }

  gotoSearchPage() {
    this.router.navigate(['/search']);
  }

  loadData(event) {
    setTimeout(() => {
      this.topicService.recommend(this.page + 1).subscribe(res => {
        let newRecommend = JSON.parse(JSON.stringify(this.recommend));
        const extraRecommend = JSON.parse(JSON.stringify(res));
        newRecommend = [...newRecommend, ...extraRecommend];
        this.recommend = newRecommend;
        console.log(this.recommend);
      })
      this.page = this.page + 1;
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.recommend.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
