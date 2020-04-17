import { Util } from './../../util';
import { AuthConstants } from './../../config/auth-constants';
import { StorageService } from './../../services/storage/storage.service';
import { ToastService } from './../../services/toast/toast.service';
import { UserService } from './../../services/user/user.service';
import { AuthService } from './../../services/auth/auth.service';
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
  userInfo;
  token;
  tracks;
  getDateDiff = Util.getDateDiff;
  constructor(
    private topicService: TopicService,
    private answerService: AnswerService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private authService: AuthService,
    private userService: UserService,
    private toastService: ToastService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.topicService.findById(params.id).subscribe(res => {
        this.topicData = res;
        console.log(this.topicData);
        this.answerService.find(this.topicData._id, 1).subscribe(res2 => {
          this.answers = res2;
        });
      });
    });

    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
    });

    this.authService.tracks.subscribe((res: any) => {
      this.tracks = res;
    });
  }

  ngOnDestroy() {
    if (!this.tracks) {
      this.storageService.store(AuthConstants.TRACK, {tracks: [this.topicData._id]});
    } else {
      const newTracks = JSON.parse(JSON.stringify(this.tracks));
      const index = newTracks.tracks.indexOf(this.topicData._id);
      if (index !== -1) {
        newTracks.tracks.splice(index, 1);
      }
      newTracks.tracks = [this.topicData._id, ...newTracks.tracks];
      this.storageService.store(AuthConstants.TRACK, newTracks);
    }
    this.authService.getTracks();
  }

  followTopics() {
    this.userService.followTopics(this.topicData._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      newUserInfo.followingTopics.push(this.topicData._id);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('关注话题成功');
    });
  }

  unfollowTopics() {
    this.userService.unfollowingTopics(this.topicData._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      const index = newUserInfo.followingTopics.indexOf(this.topicData._id);
      newUserInfo.followingTopics.splice(index, 1);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('取消关注话题成功');
    });
  }

  async createTopic() {
    const modal = await this.modalController.create({
      component: AnswerCreatorPage,
      componentProps: {
        topicData: this.topicData,
        answers: this.answers
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data.answers) {
      this.answers = [...data.answers];
    }
  }


  gotoPersonalCenter(id) {
    this.router.navigate([`/personal-center/${id}`]);
  }
}
