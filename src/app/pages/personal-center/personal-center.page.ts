import { AuthService } from './../../services/auth/auth.service';
import { InfoEditorPage } from './info-editor/info-editor.page';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.page.html',
  styleUrls: ['./personal-center.page.scss'],
})
export class PersonalCenterPage implements OnInit {
  userDatas;
  userInfo;
  token;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.authService.userDatas.subscribe((res: any) => {
        this.userInfo = res.user;
        this.token = res.token;
      });
      // if (params.id !== this.userInfo._id ) {
      //   this.userService.findById(params.id).subscribe(res => {
      //     this.userDatas = res;
      //   });
      // }
    });
  }

  async infoEdit() {
    const modal = await this.modalController.create({
      component: InfoEditorPage,
      componentProps: {
        userInfo: this.userInfo,
        token: this.token
      }
    });
    return await modal.present();
  }

}
