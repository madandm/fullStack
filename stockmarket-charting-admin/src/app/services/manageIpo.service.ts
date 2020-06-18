import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('token') })
};


@Injectable({
  providedIn: 'root'
})
export class ManageIpoService {

  constructor(private http: HttpClient) { }
  postIpo(info) {
    const ipo =
    {
      id: info.id,
      companyName: info.companyname,
      exchangeId: info.exchange,
      prePrice: info.price,
      totalNum: info.shares,
      openDate: info.date,
      expression: info.remarks
    };
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-company-service/api/company/ipo`,
    JSON.stringify(ipo), httpOptions);
  }

}
