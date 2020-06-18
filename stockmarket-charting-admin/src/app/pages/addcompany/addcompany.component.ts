import { Component, OnInit } from '@angular/core';
import {ManageCompanyService} from '../../services/manageCompany.service';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-sign-in',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})

export class AddcompanyComponent implements OnInit {

  alerts: Alert[];

  constructor(private manageCompanyService: ManageCompanyService, private router: Router) {
    this.reset();
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
  }

  /* 登录操作 */
  onSubmit(value: any) {
    if (this.validInput(value)) {
      this.manageCompanyService.postAddCompany(value).subscribe(
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
