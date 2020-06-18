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
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-auth-service/auth/oauth/token` + `?grant_type=password&scope=webclient&username=${user.name}&password=${user.password}`, JSON.stringify(user), httpOptions);
  }
}
