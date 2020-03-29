import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController) { }

  async presentLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      spinner: 'crescent'
    });
  }
}
