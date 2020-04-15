import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private httpService: HttpService
  ) {}

  create(postData, token) {
    return this.httpService.post('message', postData, token);
  }

  read(id, token) {
    return this.httpService.patch(`message/${id}`, {isRead: true}, token);
  }

  delete(id, token) {
    return this.httpService.delete(`message/${id}`, token);
  }
}
