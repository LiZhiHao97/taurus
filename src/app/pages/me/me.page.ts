import { ToastService } from './../../services/toast/toast.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {
  userInfo;
  token;
  isShowModal = false;
  checked = false;
  tracks;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
    });

    this.authService.tracks.subscribe((res: any) => {
      this.tracks = res.tracks;
    });
  }

  gotoPage(route) {
    this.router.navigate([`/tabs/me/${route}`, {id: this.userInfo._id}]);
  }

  gotoPersonalCenter() {
    this.router.navigate(['/personal-center/' + this.userInfo._id]);
  }

  showModal() {
    this.isShowModal = true;
  }

  feedback() {
    this.toastService.presentToast('感谢您的宝贵意见，我们会酌情考虑');
    this.isShowModal = false;
  }
  toggleChange() {
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
    }
  }
}
