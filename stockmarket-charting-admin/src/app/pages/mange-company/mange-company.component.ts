import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ManageCompanyService} from '../../services/manageCompany.service';
@Component({
  selector: 'app-mange-company',
  templateUrl: './mange-company.component.html',
  styleUrls: ['./mange-company.component.css']
})
export class MangeCompanyComponent implements OnInit {

  page = 2;
  infoList: any;
  public companyName: any;
  constructor( private router: Router , private manageCompanyService: ManageCompanyService) {

    this.manageCompanyService.postManageCompany().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.infoList = data;
        this.companyName = this.infoList.companyName;
      }
    );
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
  }
  addCompany(): void {
    this.router.navigate(['/addCompany']);
  }

  editCompany(value: any): void {
    this.router.navigate(['/editCompany'],
    {queryParams:
      {companyName: value}
    });
  }
  deleteCompany(companyName, companyCode, exchangeId, brief): void {
    this.router.navigate(['/deleteCompany'],
    {queryParams:
      {companyName, companyCode, exchangeId, brief}
    });
  }

}
