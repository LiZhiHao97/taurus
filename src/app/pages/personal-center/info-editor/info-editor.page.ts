import { AuthService } from './../../../services/auth/auth.service';
import { StorageService } from './../../../services/storage/storage.service';
import { UserService } from './../../../services/user/user.service';
import { ToastService } from './../../../services/toast/toast.service';
import { PhotoService } from './../../../services/photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavParams } from '@ionic/angular';
import { Util } from '../../../util';
import { AuthConstants } from 'src/app/config/auth-constants';

@Component({
  selector: 'app-info-editor',
  templateUrl: './info-editor.page.html',
  styleUrls: ['./info-editor.page.scss'],
})
export class InfoEditorPage implements OnInit {
  isShowModal = false;
  files = [];
  userInfo;
  token;
  constructor(
    private actionSheetController: ActionSheetController,
    private photoService: PhotoService,
    private navParams: NavParams,
    private toastService: ToastService,
    private userService: UserService,
    private storageService: StorageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.userInfo);
  }

  doClose() {
    this.navParams.data.modal.dismiss();
  }
  
  cancel() {
    this.navParams.data.modal.dismiss();
  }

  save() {
    if (!this.userInfo.name.length) {
      return this.toastService.presentToast('用户名不得为空');
    }
    const postData = {
      avatar_url: this.userInfo.avatar_url,
      name: this.userInfo.name,
      gender: this.userInfo.gender
    };
    if (this.userInfo.headline.length) {
      postData['headline'] = this.userInfo.headline;
    }
    console.log(postData);
    this.userService.update(postData, this.userInfo._id, this.token).subscribe(res => {
      this.toastService.presentToast('保存成功');
      this.storageService.store(AuthConstants.AUTH, {token: this.token, user: this.userInfo});
      this.authService.getUserData();
      this.navParams.data.modal.dismiss();
    });
  }

  showModal() {
    this.isShowModal = true;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '选择图片',
      buttons: [{
        text: '从图片库中选择',
        icon: 'albums',
        handler: () => {
          this.showModal();
        }
      }, {
        text: '使用相机',
        icon: 'camera',
        handler: async () => {
          const photo = await this.photoService.takePhoto();
          const file = Util.dataURLtoFile(photo);
          this.photoService.uploadImage(file).subscribe(res => {
            const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
            newUserInfo.avatar_url = res['url'].replace('localhost:8100', 'localhost:8000');
            this.files = [];
            this.isShowModal = false;
            this.toastService.presentToast('上传成功');
            this.userInfo = newUserInfo;
          });
        }
      }, {
        text: '取消',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          
        }
      }]
    });
    await actionSheet.present();
  }

  fileChange(params) {
    console.log(params);
    const { files, type, index } = params;
    this.files = files;
    console.log(this.files);
  }

  imageClick(params) {
    console.log(params);
  }

  uploadImage() {
    if (!this.files.length) {
      return this.toastService.presentToast('请先上传头像');
    }
    const file = Util.dataURLtoFile(this.files[0].url);
    this.photoService.uploadImage(file).subscribe(res => {
      const newUserInfo = JSON.parse(JSON.stringify(this.userInfo));
      newUserInfo.avatar_url = res['url'].replace('localhost:8100', 'localhost:8000');
      this.files = [];
      this.isShowModal = false;
      this.toastService.presentToast('上传成功');
      this.userInfo = newUserInfo;
    });
  }
}
