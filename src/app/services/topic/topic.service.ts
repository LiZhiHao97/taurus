import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private httpService: HttpService
  ) { }

  create(postData: any, token) {
    return this.httpService.post('topics', postData, token);
  }
}
