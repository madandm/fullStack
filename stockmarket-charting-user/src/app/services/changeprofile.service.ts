import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('token') })
};

@Injectable({
  providedIn: 'root'
})
export class ChangeProfileService {

  constructor(private http: HttpClient) { }

  postChangeprofile(info) {
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-user-service/api/user/update`, JSON.stringify(info), httpOptions);
  }

  getChangeprofile(name) {
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-user-service/api/user/search` + `?name=${name}`, null, httpOptions);
  }

  postChangepassword(name, pwd) {
    const user =
    {
      userName: name,
      password: pwd,
    };
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-user-service/api/user/pwd`,
    JSON.stringify(user), httpOptions);
  }
}
