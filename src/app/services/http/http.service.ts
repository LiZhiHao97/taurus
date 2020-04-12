import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any, token = '') {
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

  patch(serviceName: string, data: any, token = '') {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredintials: false };

    if (token.length) {
      options.headers = options.headers.set('Authorization', 'Bearer ' + token);
      console.log(options.headers);
    }

    const url = environment.apiUrl + serviceName;
    return this.http.patch(url, JSON.stringify(data), options);
  }

  put(serviceName: string, token = '') {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredintials: false };

    if (token.length) {
      options.headers = options.headers.set('Authorization', 'Bearer ' + token);
      console.log(options.headers);
    }

    const url = environment.apiUrl + serviceName;
    return this.http.put(url, {}, options);
  }

  delete(serviceName: string, token = '') {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredintials: false };

    if (token.length) {
      options.headers = options.headers.set('Authorization', 'Bearer ' + token);
      console.log(options.headers);
    }

    const url = environment.apiUrl + serviceName;
    return this.http.delete(url, options);
  }
 
  postFile(serviceName: string, file: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, file);
  }
}
