import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private httpService: HttpService
  ) { }

  find(searchContent) {
    return this.httpService.get(`topics?page=1&per_page=10&q=${searchContent}`);
  }

  create(postData: any, token) {
    return this.httpService.post('topics', postData, token);
  }

  findById(id) {
    return this.httpService.get(`topics/${id}?fields=labels`)
  }
}
