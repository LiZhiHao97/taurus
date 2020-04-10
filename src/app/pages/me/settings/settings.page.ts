import { Router } from '@angular/router';
import { ToastService } from './../../../services/toast/toast.service';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private _modal: ModalService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.toastService.presentToast('退出成功');
    this.router.navigate(['/login']);
  }

  showAlert() {
    this._modal.alert('退出登录', '是否确定继续该操作 ?', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确认', onPress: () => this.logout() }
    ]);
  }
  
  showMsg(msg) {
    this.toastService.presentToast(msg);
  }
  
}
