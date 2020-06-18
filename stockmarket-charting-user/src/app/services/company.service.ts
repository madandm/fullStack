import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('token') })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  postSearch(name) {
       return this.http.post(`${environment.baseTokenUrl}/api/cloud-company-service/api/company/search`
     + `?key=${name}`, null, httpOptions);
  }

  postCompare(name) {
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-company-service/api/company/key`
     + `?key=${name}`, null, httpOptions);
  }

}
