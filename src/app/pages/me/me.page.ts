import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {
  userInfo;
  token;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
    });
  }

  logoutAction() {
    this.authService.logout();
  }

  gotoPage(route) {
    this.router.navigate([`/tabs/me/${route}`]);
  }

  gotoPersonalCenter() {
    this.router.navigate(['/personal-center/' + this.userInfo._id]);
  }
}
