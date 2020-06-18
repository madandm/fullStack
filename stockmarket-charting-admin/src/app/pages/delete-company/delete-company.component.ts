import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ManageCompanyService} from '../../services/manageCompany.service';
import { ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {
  public companyName: any;
  public companyCode: any;
  public exchangeId: any;
  public brief: any;

  constructor(private manageCompanyService: ManageCompanyService, public activeRoute: ActivatedRoute, private router: Router) {

    this.activeRoute.queryParams.subscribe(params => {
      this.companyName = params.companyName;
      this.companyCode = params.companyCode;
      this.exchangeId = params.exchangeId;
      this.brief = params.brief;
    });
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
  }

  onSubmit(): void {
    this.manageCompanyService.postDeleteCompany(this.companyName).subscribe(
      data => {
        this.router.navigate(['/mangeCompany']);
      }
    );
  }
}
