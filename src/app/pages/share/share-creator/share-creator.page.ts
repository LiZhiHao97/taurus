import { ShareService } from './../../../services/share/share.service';
import { AuthService } from './../../../services/auth/auth.service';
import { Util } from './../../../util';
import { PhotoService } from './../../../services/photo/photo.service';
import { ToastService } from './../../../services/toast/toast.service';
import { NavParams } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-share-creator',
  templateUrl: './share-creator.page.html',
  styleUrls: ['./share-creator.page.scss'],
})
export class ShareCreatorPage implements OnInit {
  userInfo;
  token;

  files = [];

  title: string = '';
  content: string = '';
  covers: any = [];
  loading = false;
  isUpload = false;

  constructor(
    private navParams: NavParams,
    private toastService: ToastService,
    private photoService: PhotoService,
    private authService: AuthService,
    private shareServcice: ShareService
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
    });
  }


  doClose() {
    this.navParams.data.modal.dismiss({
      newShare: undefined
    });
  }

  create() {
    if (!this.covers.length) {
      return this.toastService.presentToast('请先上传封面');
    }
    if (!this.title.length) {
      return this.toastService.presentToast('请先添加标题');
    }
    if (!this.content.length) {
      return this.toastService.presentToast('请先添加内容');
    }
    const content = this.content.replace(/\n|\r|(\r\n)|(\u0085)|(\u2028)|(\u2029)/g, '<br>');
    this.shareServcice.create({title: this.title, content, covers: this.covers}, this.token).subscribe(res => {
      this.navParams.data.modal.dismiss({
        newShare: res
      });
      this.toastService.presentToast('分享成功');
    });
  }
  fileChange(params) {
    console.log(params);
    const { files, type, index } = params;
    this.files = files;
    console.log(this.files);
    this.isUpload = false;
  }

  imageClick(params) {
    console.log(params);
  }

  uploadImage() {
    if (this.isUpload) {
      return this.toastService.presentToast('已经上传成功了，请不要重复上传');
    }
    if (!this.files.length) {
      return this.toastService.presentToast('请上传至少一张封面');
    }
    this.loading = true;
    const base64Datas = []
    for (const file of this.files) {
      base64Datas.push(file.url);
    }
    const data = Util.dataURLtoFile2(base64Datas);
    setTimeout(() => {
      this.photoService.uploadImages(data).subscribe(res => {
        this.toastService.presentToast('上传成功');
        this.loading = false;
        this.isUpload = true;
        let covers = JSON.parse(JSON.stringify(res));
        covers = covers.map(item => item.replace('localhost:8100', 'localhost:8000'));
        this.covers = covers;
      });
    }, 1000);
  }
  
}
