import { AuthConstants } from './../../config/auth-constants';
import { StorageService } from './../storage/storage.service';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDatas = new BehaviorSubject<any>('');
  tracks = new BehaviorSubject<any>('');

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      this.userDatas.next(res);
    });
  }

  getTracks() {
    this.storageService.get(AuthConstants.TRACK).then(res => {
      this.tracks.next(res);
    });
  }

  login(postData: any): Observable<any> {
    return this.httpService.post('users/login', postData);
  }

  register(postData: any) {
    return this.httpService.post('users', postData);
  }

  logout() {
    this.storageService.removeItem(AuthConstants.AUTH).then(res => {
      this.userDatas.next('');
      this.router.navigate(['/login']);
    });
  }
}
