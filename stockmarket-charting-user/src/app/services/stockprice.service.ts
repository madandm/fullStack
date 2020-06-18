import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('token') })
};

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  constructor(private http: HttpClient) { }

  postEcharcompare(info) {
    const user =
    {
      key1: info.name1,
      key2: info.name2,
      periodFrom: info.periodFrom,
      periodEnd: info.periodEnd
    };
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-stockprice-service/api/echart/compare`,
    JSON.stringify(user), httpOptions);
  }

  postEcharSearch(name) {
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-stockprice-service/api/echart/search`
    + `?key=${name}`, null, httpOptions);
  }

}
