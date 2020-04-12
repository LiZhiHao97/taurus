import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private httpService: HttpService
  ) { }

  find(id, page) {
    return this.httpService.get(`topics/${id}/answers?page=${page}&per_page=10`);
  }

  findByUser(id, page) {
    return this.httpService.get(`topics/a/answers/b/users/${id}?page=${page}&per_page=10`);
  }

  findById(tid, aid) {
    return this.httpService.get(`topics/${tid}/answers/${aid}`);
  }

  create(postData, tid, token) {
    return this.httpService.post(`topics/${tid}/answers`, postData, token);
  }
}
