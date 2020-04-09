import { StorageService } from './../../../services/storage/storage.service';
import { AuthService } from './../../../services/auth/auth.service';
import { UserService } from './../../../services/user/user.service';
import { ToastService } from './../../../services/toast/toast.service';
import { TagService } from './../../../services/tag/tag.service';
import { Component, OnInit } from '@angular/core';
import { AuthConstants } from '../../../config/auth-constants';

@Component({
  selector: 'app-tag-setting',
  templateUrl: './tag-setting.page.html',
  styleUrls: ['./tag-setting.page.scss'],
})
export class TagSettingPage implements OnInit {
  userInfo;
  token;
  allTags;
  constructor(
    private tagService: TagService,
    private userService: UserService,
    private toastService: ToastService,
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
      
      const myTags = [];
      for (const item of this.userInfo.tags) {
        myTags.push(item._id);
      }

      this.tagService.getAllTags().subscribe(res => {
        const data: any = res;
        const allTags = [
          { name: '生活', items: []},
          { name: '学习', items: []},
          { name: '工作', items: []},
          { name: '娱乐', items: []},
          { name: '其他', items: []},
        ]
        for (const item of data) {
          item.selected = myTags.indexOf(item._id) === -1 ? false : true;
          allTags[item.type].items.push(item);
        }
        this.allTags = [...allTags];
        console.log(this.allTags);
      })
    });
  }

  save() {
    const myTags = [];
    const tagInfo = [];
    for (const type of this.allTags) {
      for (const item of type.items) {
        if (item.selected) {
          myTags.push(item._id);
          tagInfo.push(item);
        }
      }
    }
    if (myTags.length === 0) {
      return this.toastService.presentToast('请选择至少一条标签');
    }
    this.userService.update({ tags: myTags }, this.userInfo._id, this.token).subscribe(res => {
      this.toastService.presentToast('保存成功');
    });
    const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
    newUserInfo.tags = tagInfo;
    this.storageService.store(AuthConstants.AUTH, {token: this.token, user: newUserInfo});
    this.authService.getUserData();
  }

  change(item) {
    const index = this.allTags[item.type].items.indexOf(item);
    const newAllTags = JSON.parse(JSON.stringify(this.allTags));
    newAllTags[item.type].items[index].selected = !newAllTags[item.type].items[index].selected;
    this.allTags = newAllTags;
  }
  
}
