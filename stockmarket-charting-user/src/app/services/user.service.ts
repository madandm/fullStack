import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postSignIn(user) {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/login', JSON.stringify(user), httpOptions);
  }

  postSignUp(user) {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/login', JSON.stringify(user), httpOptions);
  }

  postSearch(info) {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/search', JSON.stringify(info), httpOptions);
  }

  postCompare(info) {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/compare', JSON.stringify(info), httpOptions);
  }
  postEcharcompare(info) {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/echart', JSON.stringify(info), httpOptions).toPromise;
  }

}
