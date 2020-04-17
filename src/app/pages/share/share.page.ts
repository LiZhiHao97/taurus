import { ShareService } from './../../services/share/share.service';
import { ShareCreatorPage } from './share-creator/share-creator.page';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  shares: any = [];
  page = 1;

  constructor(
    private http: HttpClient,
    private modalController: ModalController,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.shareService.find(this.page).subscribe(res => {
      this.shares = res;
      console.log(this.shares);
    })
  }

  async createShare() {
    const modal = await this.modalController.create({
      component: ShareCreatorPage
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data.newShare) {
      const newShares = JSON.parse(JSON.stringify(this.shares));
      this.shares = [data.newShare, ...newShares];
    }
  }
  
}
