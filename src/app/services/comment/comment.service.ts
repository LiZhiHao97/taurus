import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private httpService: HttpService
  ) { }

  getComments(tid, aid) {
    return this.httpService.get(`topics/${tid}/answers/${aid}/comments`);
  }

  getSubComments(tid, aid, rootCommentId) {
    return this.httpService.get(`topics/${tid}/answers/${aid}/comments?rootCommentId=${rootCommentId}`);
  }

  comment(postData, tid, aid, token) {
    return this.httpService.post(`topics/${tid}/answers/${aid}/comments`, postData, token);
  }
}
