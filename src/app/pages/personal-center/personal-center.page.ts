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
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.userService.findById(params.id).subscribe(res => {
        this.userDatas = res;
      });
    });
  }

  async infoEdit() {
    const modal = await this.modalController.create({
      component: InfoEditorPage,
      componentProps: {
        userDatas: this.userDatas
      }
    });
    return await modal.present();
  }

}
