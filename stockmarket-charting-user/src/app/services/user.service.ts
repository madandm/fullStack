import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
const username = 'cloudsimpleservice';
const password = 'mysecret';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Basic ' + btoa(username + ':' + password) })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postSignIn(user) {
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-auth-service/auth/oauth/token` + `?grant_type=password&scope=webclient&username=${user.name}&password=${user.password}`, JSON.stringify(user), httpOptions);
  }

  postSignUp(value) {
    const user =
    {
      email : value.email,
      password: value.password,
      userName: value.name,
      mobile: value.mobile
    };
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-user-service/api/user/regist`,
    JSON.stringify(user), httpOptions);
  }

}
