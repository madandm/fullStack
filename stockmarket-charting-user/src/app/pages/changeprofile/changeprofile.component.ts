import { Component, OnInit } from '@angular/core';
import {ChangeProfileService} from '../../services/changeprofile.service';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];
@Component({
  selector: 'app-changeprofile',
  templateUrl: './changeprofile.component.html',
  styleUrls: ['./changeprofile.component.css']
})
export class ChangeProfileComponent implements OnInit {
  public email;
  public mobileNum;
  public userinfo;
  alerts: Alert[];
  constructor(private changeService: ChangeProfileService, private router: Router) {
    this.reset();
    this.changeService.getChangeprofile(sessionStorage.getItem('username')).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.userinfo = data;
        this.email = this.userinfo.email;
        this.mobileNum = this.userinfo.mobileNum;
      }
    );
   }

  ngOnInit(): void {

    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
  }
  onSubmit(value: any) {
    if (!value.email) {
      this.userinfo.email = this.email;
    } else {
      this.userinfo.email = value.email;
    }

    if (!value.mobileNum) {
      this.userinfo.mobileNum = this.mobileNum;
    } else {
      this.userinfo.mobileNum = value.mobileNum;
    }
    this.changeService.postChangeprofile(this.userinfo).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          this.alerts.push({type : 'success', message: 'update success!'});
        },
        error => {
          this.alerts.push({type : 'danger', message: 'you have not change any message!'});
        }
      );
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
}
