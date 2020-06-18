import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('token') })
};


@Injectable({
  providedIn: 'root'
})
export class ManageCompanyService {

  constructor(private http: HttpClient) { }
  postManageCompany() {
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-company-service/api/company/all`,
    null, httpOptions);
  }

  postEditCompany(info) {
    const company =
    {
      companyName : info.companyName,
      companyCode : info.companyCode,
      exchangeId : info.exchangeId,
      turnOver : info.turnOver,
      ceo : info.ceo,
      boardOfDrectors : info.boardOfDrectors,
      sectorId : info.sectorId,
      brief : info.brief,
    };
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-company-service/api/company/update`,
    JSON.stringify(company), httpOptions);
  }
  postsearchCompany(companyName) {
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-company-service/api/company/key`
     + `?key=${companyName}`, null, httpOptions);
  }
  postDeleteCompany(companyName) {
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-company-service/api/company/delete`
     + `?companyName=${companyName}`, null, httpOptions);
  }
  postAddCompany(info) {
    const company =
    {
      companyName : info.companyName,
      companyCode : info.companyCode,
      exchangeId : info.exchangeId,
      turnOver : info.turnOver,
      ceo : info.ceo,
      boardOfDrectors : info.boardOfDrectors,
      sectorId : info.sectorId,
      brief : info.brief,
    };
    return this.http.post(`${environment.baseTokenUrl}/api/cloud-company-service/api/company/regist`,
    JSON.stringify(company), httpOptions);
  }

}
