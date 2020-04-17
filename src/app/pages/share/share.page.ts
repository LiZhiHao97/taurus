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

  loadData(event) {
    setTimeout(() => {
      this.shareService.find(this.page + 1).subscribe(res => {
        let newShares = JSON.parse(JSON.stringify(this.shares));
        const extraShare = JSON.parse(JSON.stringify(res));
        newShares = [...newShares, ...extraShare];
        this.shares = newShares;

        this.page = this.page + 1;
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.shares.length === 1000) {
          event.target.disabled = true;
        }
      });
    }, 500);
  }
}
