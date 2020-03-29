import { AuthService } from '../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {
  userInfo = {};

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
    });
  }
  logoutAction() {
    this.authService.logout();
  }
}
