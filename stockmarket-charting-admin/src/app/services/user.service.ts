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

  postSearch(info) {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/search', JSON.stringify(info), httpOptions);
  }

  postEcharcompare(info) {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/echart', JSON.stringify(info), httpOptions).toPromise;
  }

  postAdd(info) {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/add', JSON.stringify(info), httpOptions);
  }

  postManageStock() {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/stock', JSON.stringify(''), httpOptions);
  }

  postAddSubmit(info) {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/addSubmit', JSON.stringify(info), httpOptions);
  }

  postManageCompany() {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/company', JSON.stringify(''), httpOptions);
  }

  postDeleteCompany() {
    /*return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);*/
    return this.http.post('http://mock-api.com/wz2l7knL.mock/deleteCompany', JSON.stringify(''), httpOptions);
  }
}
