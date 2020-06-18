import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('token') })
};


@Injectable({
  providedIn: 'root'
})
export class ManageStockService {

  constructor(private http: HttpClient) { }

  postManageStock() {
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-basedata-service/api/mangeStock/all`, null, httpOptions);
  }

  postAddStock(info) {
    const exchange =
    {
      exchangeId: info.exchangeId,
      exchangeName: info.exchangeName,
      brief: info.brief,
      contactAddr: info.contactAddr,
      remarks: info.remarks
    };
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-basedata-service/api/mangeStock/add`,
     JSON.stringify(exchange), httpOptions);
  }

}
