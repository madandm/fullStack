import { Component, OnInit } from '@angular/core';
import {ManageCompanyService} from '../../services/manageCompany.service';
import { Router } from '@angular/router';
import { ActivatedRoute  } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})

export class EditcompanyComponent implements OnInit {

  alerts: Alert[];
  public companyName;
  public companyname;
  public companyCode;
  public exchangeId;
  public turnOver;
  public ceo;
  public boardOfDrectors;
  public sectorId;
  public brief;
  public info;

  constructor(private manageCompanyService: ManageCompanyService, public activeRoute: ActivatedRoute, private router: Router) {
    this.reset();
    this.activeRoute.queryParams.subscribe(params => {
      this.companyName = params.companyName;
    });
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
    this.manageCompanyService.postsearchCompany(this.companyName).subscribe(
      data => {
        this.info = data;
        this.companyname = this.info.companyName;
        this.companyCode = this.info.companyCode;
        this.exchangeId = this.info.exchangeId;
        this.turnOver = this.info.turnOver;
        this.ceo = this.info.ceo;
        this.boardOfDrectors = this.info.boardOfDrectors;
        this.sectorId = this.info.sectorId;
        this.brief = this.info.brief;
      }
    );
  }

  /* 登录操作 */
  onSubmit(value: any) {
    if (this.validInput(value)) {
      if (!value.companyname) {
        this.info.companyName = this.companyname;
      } else {
        this.info.companyName = value.companyname;
      }
      if (!value.companyCode) {
        this.info.companyCode = this.companyCode;
      } else {
        this.info.companyCode = value.companyCode;
      }
      if (!value.exchangeId) {
        this.info.exchangeId = this.exchangeId;
      } else {
        this.info.exchangeId = value.exchangeId;
      }
      if (!value.turnOver) {
        this.info.turnOver = this.turnOver;
      } else {
        this.info.turnOver = value.turnOver;
      }
      if (!value.ceo) {
        this.info.ceo = this.ceo;
      } else {
        this.info.ceo = value.ceo;
      }
      if (!value.boardOfDrectors) {
        this.info.boardOfDrectors = this.boardOfDrectors;
      } else {
        this.info.boardOfDrectors = value.boardOfDrectors;
      }
      if (!value.sectorId) {
        this.info.sectorId = this.sectorId;
      } else {
        this.info.sectorId = value.sectorId;
      }
      if (!value.brief) {
        this.info.brief = this.brief;
      } else {
        this.info.brief = value.brief;
      }
      this.manageCompanyService.postEditCompany(this.info).subscribe(
        data => {
          this.router.navigate(['/mangeCompany']);
        },
        error => {
          this.alerts.push({type : 'danger', message: 'update fail!'});
        }
      );
    }
  }
  /* 验证输入项 */
  validInput(value: any): boolean {
    this.reset();
    return true;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
