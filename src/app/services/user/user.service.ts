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
}
