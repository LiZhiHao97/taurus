import { UserService } from './../../services/user/user.service';
import { AuthService } from './../../services/auth/auth.service';
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
  followingTracks: any = [];
  recommend: any = [];
  hotRank: any = [];

  followingTracksPage = 1;
  recommendPage = 1;

  isRecommendLoad = false;
  isHotLoad = false;

  index = 0;
  
  userInfo;
  token;
  
  constructor(
    private modalController: ModalController,
    private router: Router,
    private topicService: TopicService,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;

      if (this.userInfo && this.index === 0) {
        this.userService.listFollowingTracks({following: this.userInfo.following}, this.followingTracksPage).subscribe(res => {
          this.followingTracks = res;
        })
      }
    });
  }

  loadRecommend() {
    if (!this.isRecommendLoad) {
      this.topicService.recommend(this.recommendPage).subscribe(res => {
        this.recommend = res;
        this.isRecommendLoad = true;
      });
    }
  }

  loadHot() {
    if (!this.isHotLoad) {
      this.topicService.findHot().subscribe(res => {
        this.hotRank = res;
        this.isHotLoad = true;
      });
    }
  }
  
  onTabClick(item) {
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

  loadRecommendData(event) {
    setTimeout(() => {
      this.topicService.recommend(this.recommendPage + 1).subscribe(res => {
        let newRecommend = JSON.parse(JSON.stringify(this.recommend));
        const extraRecommend = JSON.parse(JSON.stringify(res));
        newRecommend = [...newRecommend, ...extraRecommend];
        this.recommend = newRecommend;
        console.log(this.recommend);

        this.recommendPage = this.recommendPage + 1;
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.recommend.length === 1000) {
          event.target.disabled = true;
        }
      });
    }, 500);
  }

  loadFollowingData(event) {
    setTimeout(() => {
      this.userService.listFollowingTracks({following: this.userInfo.following}, this.followingTracksPage + 1).subscribe(res => {
        let newFollowingTracks = JSON.parse(JSON.stringify(this.followingTracks));
        const extraFollowingTracks = JSON.parse(JSON.stringify(res));
        newFollowingTracks = [...newFollowingTracks, ...extraFollowingTracks];
        this.followingTracks = newFollowingTracks;
        console.log(this.followingTracks);

        this.followingTracksPage = this.followingTracksPage + 1;
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.followingTracks.length === 1000) {
          event.target.disabled = true;
        }
      });
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
