import { PhotoService } from './../../../services/photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-info-editor',
  templateUrl: './info-editor.page.html',
  styleUrls: ['./info-editor.page.scss'],
})
export class InfoEditorPage implements OnInit {
  userDatas;
  constructor(
    private actionSheetController: ActionSheetController,
    private photoService: PhotoService
  ) { }

  ngOnInit() {

  }

  cancel() {

  }

  save() {
    console.log(this.userDatas);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '选择图片',
      buttons: [{
        text: '从图片库中选择',
        icon: 'albums',
        handler: () => {
          
        }
      }, {
        text: '使用相机',
        icon: 'camera',
        handler: () => {
          this.photoService.takePhoto();
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
}
