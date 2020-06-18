import { Component, OnInit } from '@angular/core';
import {ManageIpoService} from '../../services/manageIpo.service';
import { Router } from '@angular/router';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIPOComponent implements OnInit {
  alerts: Alert[];

  constructor(private manageIpoService: ManageIpoService, private router: Router) {
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
      this.manageIpoService.postIpo(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          this.alerts.push({type : 'success', message: 'update success!'});
        },
        error => {
          this.alerts.push({type : 'danger', message: 'check your input!'});
        }
      );
    }
  }
  /* 验证输入项 */
  validInput(value: any): boolean {
    if (!value.id) {
      this.alerts.push({type : 'danger', message: 'id required!'});
      return false;
    }

    if (!value.companyname) {
      this.alerts.push({type : 'danger', message: 'companyname required!'});
      return false;
    }

    if (!value.exchange) {
      this.alerts.push({type : 'danger', message: 'exchange required!'});
      return false;
    }

    if (value.price !== value.price) {
      this.alerts.push({type : 'danger', message: 'price not match!'});
      return false;
    }

    if (!value.shares) {
      this.alerts.push({type : 'danger', message: 'shares required!'});
      return false;
    }

    if (!value.date) {
      this.alerts.push({type : 'danger', message: 'date required!'});
      return false;
    }

    if (!value.remarks) {
      this.alerts.push({type : 'danger', message: 'remarks required!'});
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
