import { LoadingController } from '@ionic/angular';
import { AuthConstants } from './../../../config/auth-constants';
import { StorageService } from './../../../services/storage/storage.service';
import { UserService } from './../../../services/user/user.service';
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
  userInfo;
  token;
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private _modal: ModalService,
    private userService: UserService,
    private storageService: StorageService,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
      console.log(this.userInfo);
    });
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

  async clearCache() {
    const loading = await this.loadingController.create({
      message: '清除中',
      duration: 2000
    });
    await loading.present();
    await this.storageService.store(AuthConstants.TRACK, {tracks: []});
    this.authService.getTracks();
    await loading.onDidDismiss();
    this.toastService.presentToast('清除成功');
  }
  
  showMsg(msg) {
    this.toastService.presentToast(msg);
  }

  showEmailPrompt() {
    this._modal.prompt(
      '修改邮箱',
      '请输入新的邮箱地址',
      [
        {
          text: '取消',
          onPress: (value) => {
            console.log(value);
          }
        },
        {
          text: '确认',
          onPress: (value) => {
            console.log(value);
            const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (!reg.test(value)) {
              this.toastService.presentToast('邮箱格式不正确');
            } else {
              this.userService.update({email: value}, this.userInfo._id, this.token).subscribe(res => {
                const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
                newUserInfo.email = value;
                this.userInfo = newUserInfo;
                this.storageService.store(AuthConstants.AUTH, {token: this.token, user: this.userInfo});
                this.authService.getUserData();
                this.toastService.presentToast('修改成功');
              });
            }
          }
        }
      ],
      'default',
      null,
      ['请输入...']
    );
  }

  showPhonePrompt() {
    this._modal.prompt(
      '修改手机号',
      '请输入新的手机号码',
      [
        {
          text: '取消',
          onPress: (value) => {
            console.log(value);
          }
        },
        {
          text: '确认',
          onPress: (value) => {
            console.log(value);
            const reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
            if (!reg.test(value)) {
              this.toastService.presentToast('手机号码格式不正确');
            } else {
              this.userService.update({phone: value}, this.userInfo._id, this.token).subscribe(res => {
                const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
                newUserInfo.phone = value;
                this.userInfo = newUserInfo;
                this.storageService.store(AuthConstants.AUTH, {token: this.token, user: this.userInfo});
                this.authService.getUserData();
                this.toastService.presentToast('修改成功');
              });
            }
          }
        }
      ],
      'default',
      null,
      ['请输入...']
    );
  }
  
}
