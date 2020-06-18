import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {CompanyService} from '../../services/company.service';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  modelFrom: NgbDateStruct;
  modelEnd: NgbDateStruct;
  alerts: Alert[];
  private periodFrom: any;
  private periodEnd: any;
  constructor( private router: Router , private companyService: CompanyService) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
  }
  onSubmit(value: any): void {
    if (this.validInput(value)) {
      this.periodFrom = value.dp1.year + '/' + value.dp1.month + '/' + value.dp1.day;
      this.periodEnd = value.dp2.year + '/' + value.dp2.month + '/' + value.dp2.day;
      this.companyService.postCompare(value.name1).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (!info.id) {
              this.alerts.push({type : 'info', message: 'There is no company match!'});
          } else {
            this.router.navigate(['/echart'],
            {queryParams:
              {name1: value.name1, periodFrom: this.periodFrom, periodEnd: this.periodEnd, name2: value.name2}
            });
          }
        }
      );
  }
}
 /* 验证输入项 */
 validInput(value: any): boolean {
  this.reset();
  if (!value.name1) {
    this.alerts.push({type : 'danger', message: 'company code or name is required!'});
    return false;
  }
  if (!value.dp1) {
    this.alerts.push({type : 'danger', message: 'Period From is required!'});
    return false;
  }
  if (!value.dp2) {
    this.alerts.push({type : 'danger', message: 'Period End is required!'});
    return false;
  }
  return true;
}

close(alert: Alert) {
  this.alerts.splice(this.alerts.indexOf(alert), 1);
}

reset() {
  this.alerts = Array.from(ALERTS);
}
}
