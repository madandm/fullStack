import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
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

  constructor(private userService: UserService, private router: Router) {
    this.reset();
  }

  ngOnInit(): void {
  }

  /* 登录操作 */
  onSubmit(value: any) {
    if (this.validInput(value)) {
      this.router.navigate(['/addCompanyConfirm'],
      {queryParams:
        {companyname: value.companyname,
          turnover: value.turnover,
          ceo: value.ceo,
          directors: value.directors,
          exchanges: value.exchanges,
          sector: value.sector,
          writeup: value.writeup,
          code: value.code
        },
        skipLocationChange: true
      });
    }
  }
  /* 验证输入项 */
  validInput(value: any): boolean {
    this.reset();
    // TODO
    return true;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
