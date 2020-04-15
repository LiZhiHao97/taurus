import { ToastService } from './../../services/toast/toast.service';
import { AuthService } from './../../services/auth/auth.service';
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  userInfo;
  token;
  index = 0;
  page = 1;
  message: any = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe(res => {
      this.userInfo = res.user;
      this.token = res.token;

      if (this.userInfo && this.index === 0) {
        this.userService.listMessage(this.userInfo._id, this.page).subscribe(res => {
          this.message = res;
          console.log(this.message);
        });
        this.index = this.index + 1;
      }
    });
  }

  gotoGroupPage() {
    this.router.navigate(['chat-group']);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.userService.listMessage(this.userInfo._id, 1).subscribe(res => {
        this.message = res;
        this.page = 1;
      })
      event.target.complete();
    }, 2000);
  }

  readAll() {
    this.userService.readAll(this.userInfo._id, this.token).subscribe(res => {
      const newMessage = JSON.parse(JSON.stringify(this.message));
      newMessage.map(item => item.isRead = true);
      this.message = newMessage;
      this.toastService.presentToast('设置成功');
    });
  }


  loadData(event) {
    setTimeout(async () => {
      this.userService.listMessage(this.userInfo._id, this.page + 1).subscribe(res => {
        let newMessage = JSON.parse(JSON.stringify(this.message));
        const extraMessage = JSON.parse(JSON.stringify(res));
        newMessage = [...newMessage, ...extraMessage];
        this.message = newMessage;

        this.page = this.page + 1;
        event.target.complete();
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.message.length === 1000) {
          event.target.disabled = true;
        }
      })
    }, 500);
  }
}
