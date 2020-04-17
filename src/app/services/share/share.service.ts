import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(
    private httpService: HttpService
  ) { }

  find(page) {
    return this.httpService.get(`share?page=${page}&per_page=10`);
  }

  findById(id) {
    return this.httpService.get(`share/${id}`);
  }

  create(postData, token) {
    return this.httpService.post('share', postData, token);
  }
}
