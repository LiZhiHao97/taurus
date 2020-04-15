import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpService: HttpService
  ) { }

  findById(id) {
    return this.httpService.get('users/' + id);
  }

  update(postData, id, token) {
    return this.httpService.patch(`users/${id}`, postData, token);
  }

  follow(id, token) {
    return this.httpService.put(`users/following/${id}`, token);
  }

  unfollow(id, token) {
    return this.httpService.delete(`users/following/${id}`, token);
  }

  listFollowing(id) {
    return this.httpService.get(`users/${id}/following`);
  }

  listFollowers(id) {
    return this.httpService.get(`users/${id}/followers`);
  }

  followTopics(tid, token) {
    return this.httpService.put(`users/followingTopics/${tid}`, token);
  }

  unfollowingTopics(tid, token) {
    return this.httpService.delete(`users/followingTopics/${tid}`, token);
  }

  listFollowingTopics(id) {
    return this.httpService.get(`users/${id}/followingTopics`);
  }

  likingAnswers(aid, token) {
    return this.httpService.put(`users/likingAnswers/${aid}`, token);
  }

  unlikingAnswers(aid, token) {
    return this.httpService.delete(`users/unlikingAnswers/${aid}`, token);
  }

  listLikingAnswers(id) {
    return this.httpService.get(`users/${id}/likingAnswers`);
  }

  listMessage(id, page) {
    return  this.httpService.get(`users/${id}/message?page=${page}&per_page=10`);
  }

  readAll(id, token) {
    return  this.httpService.post(`users/${id}/message`, {}, token);
  }

  listFollowingTracks (postData, page) {
    return this.httpService.post(`users/a/listFollowingTracks?page=${page}&per_page=10`, postData);
  }
}
