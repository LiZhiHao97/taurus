import { StorageService } from './../../services/storage/storage.service';
import { ToastService } from './../../services/toast/toast.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { FollowingListPage } from './following-list/following-list.page';
import { FollowerListPage } from './follower-list/follower-list.page';
import { AnswerService } from './../../services/answer/answer.service';
import { AuthService } from './../../services/auth/auth.service';
import { InfoEditorPage } from './info-editor/info-editor.page';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.page.html',
  styleUrls: ['./personal-center.page.scss'],
})
export class PersonalCenterPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  userDatas;
  userInfo;
  token;
  answers: any = [];
  followers: any = [];
  page = 1;
  id;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private authService: AuthService,
    private answerService: AnswerService,
    private toastService: ToastService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.authService.userDatas.subscribe((res: any) => {
        this.userInfo = res.user;
        this.token = res.token;
      });
      this.id = params.id;
      this.userService.findById(params.id).subscribe(res => {
        this.userDatas = res;
        console.log(res);
      });
      this.answerService.findByUser(this.id, this.page).subscribe(res => {
        this.answers = res;
        console.log(this.answers);
      })

      this.userService.listFollowers(params.id).subscribe(res => {
        this.followers = res;
      })
    });
  }

  async infoEdit() {
    const modal = await this.modalController.create({
      component: InfoEditorPage,
      componentProps: {
        userInfo: this.userInfo,
        token: this.token
      }
    });
    return await modal.present();
  }

  async followingListShow() {
    const modal = await this.modalController.create({
      component: FollowingListPage,
      componentProps: {
        id: this.userDatas._id,
      }
    });
    return await modal.present();
  }

  async followerListShow() {
    const modal = await this.modalController.create({
      component: FollowerListPage,
      componentProps: {
        followers: this.followers
      }
    });
    return await modal.present();
  }

  loadData(event) {
    setTimeout(() => {
      this.answerService.findByUser(this.id, this.page + 1).subscribe(res => {
        let newAnswers = JSON.parse(JSON.stringify(this.answers));
        const extraAnswers = JSON.parse(JSON.stringify(res));
        newAnswers = [...newAnswers, ...extraAnswers];
        this.answers = newAnswers;
        console.log(this.answers);
      })
      this.page = this.page + 1;
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.answers.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  followUser() {
    this.userService.follow(this.userDatas._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      newUserInfo.following.push(this.userDatas._id);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('关注成功');

      console.log(this.userDatas.id);
      this.userService.listFollowers(this.userDatas._id).subscribe(res => {
        this.followers = res;
        console.log(res);
      })
    });
  }
  unfollowUser() {
    this.userService.unfollow(this.userDatas._id, this.token).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      const index = newUserInfo.following.indexOf(this.userDatas._id);
      newUserInfo.following.splice(index, 1);

      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
      this.authService.getUserData();
      this.toastService.presentToast('取消关注成功');

      this.userService.listFollowers(this.userDatas._id).subscribe(res => {
        this.followers = res;
      })
    });
  }
  
}
