import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private httpService: HttpService
  ) { }

  getAllTags() {
    return this.httpService.get(`labels?page=1&per_page=200`);
  }
}
