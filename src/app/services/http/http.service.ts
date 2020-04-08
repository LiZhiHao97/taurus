import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any, token = '') {
    console.log(serviceName)
    console.log(data)
    console.log(token)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredintials: false };

    if (token.length) {
      options.headers = options.headers.set('Authorization', 'Bearer ' + token);
      console.log(options.headers);
    }

    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data), options);
  }

  get(serviceName: string) {
    const url = environment.apiUrl + serviceName;
    return this.http.get(url);
  }
}
