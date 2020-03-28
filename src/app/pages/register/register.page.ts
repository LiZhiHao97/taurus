import { ToastService } from './../../services/toast/toast.service';
import { Router } from '@angular/router';
import { StorageService } from './../../services/storage/storage.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public postData = {
    name: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
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

  registerAction() {
    if (this.validateInputs()) {
      this.authService.register(this.postData).subscribe((res: any) => {
        this.toastService.presentToast('注册成功');
        this.postData.name = '';
        this.postData.password = '';
      },
      (err: any) => {
        this.toastService.presentToast('服务端错误');
      })
    } else {
      this.toastService.presentToast('用户名密码不能为空');
    }
  }
}
