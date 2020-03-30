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
  list = [
    {
      icon: 'bulb',
      title: '我的创作',
      color: '#2c77f6',
      url: '',
      count: '3个'
    },
    {
      icon: 'heart',
      title: '我赞过的',
      color: '#e35c4c',
      url: '',
      count: '35个'
    },
    {
      icon: 'star',
      title: '收藏集',
      color: '#f7c55f',
      url: '',
      count: '41个'
    },
    {
      icon: 'eye',
      title: '浏览记录',
      color: '#acb4be',
      url: ''
    },
    {
      icon: 'pricetags',
      title: '标签管理',
      color: '#acb4be',
      url: '',
      count: '105个'
    },
  ];
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
    });
  }
  logoutAction() {
    this.authService.logout();
  }

  gotoPage(route) {
    this.router.navigate([route]);
  }

  gotoPersonalCenter() {
    this.router.navigate(['/personal-center/' + this.userInfo._id]);
  }
}
