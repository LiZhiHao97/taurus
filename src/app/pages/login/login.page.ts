import { ToastService } from './../../services/toast/toast.service';
import { AuthConstants } from './../../config/auth-constants';
import { StorageService } from './../../services/storage/storage.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    name: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  validateInputs() {
    const name = this.postData.name.trim();
    const password = this.postData.password.trim();

    return (
      this.postData.name &&
      this.postData.password &&
      name.length > 0 &&
      password.length > 0
    );
  }

  loginAction() {
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe((res: any) => {
        if (res.userData) {
          this.storageService.store(AuthConstants.AUTH, res.userData);
          this.router.navigate(['/tabs/home']);
        }
        this.toastService.presentToast('登录成功');
      },
      (error: any) => {
        console.log(error);
        if (error.status === 401) {
          this.toastService.presentToast('用户名或密码错误');
        } else {
          this.toastService.presentToast('服务端错误');
        }
      });
    } else {
      this.toastService.presentToast('用户名密码不能为空');
    }
  }
}
