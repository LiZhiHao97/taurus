import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

import { Plugins, CameraResultType, Capacitor, FilesystemDirectory,
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private httpService: HttpService
  ) { }

  public async takePhoto() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    const base64Data = await this.readAsBase64(capturedPhoto);
    return base64Data;
  }

  uploadImage(postData) {
    return this.httpService.postFile('upload', postData);
  }

  uploadImages(postData) {
    return this.httpService.postFile('uploadImages', postData);
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}
