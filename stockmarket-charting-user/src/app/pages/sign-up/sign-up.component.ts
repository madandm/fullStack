import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  alerts: Alert[];

  constructor(private userService: UserService, private router: Router) {
    this.reset();
  }

  ngOnInit(): void {
  }
 /* 登录操作 */
  onSubmit(value: any) {
    if (this.validInput(value)) {
      this.userService.postSignUp(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          this.router.navigate(['/sign-in']);
        },
        error => {
          this.alerts.push({type : 'danger', message: 'username or password error!'});
        }
      );
    }
  }
  /* 验证输入项 */
  validInput(value: any): boolean {
    this.reset();
    if (!value.email) {
      this.alerts.push({type : 'danger', message: 'email required!'});
      return false;
    }

    if (!value.password) {
      this.alerts.push({type : 'danger', message: 'password required!'});
      return false;
    }

    if (value.password.length < 6) {
      this.alerts.push({type : 'danger', message: 'password length must be greater than 6!'});
      return false;
    }

    if (!value.passwordConfirm) {
      this.alerts.push({type : 'danger', message: 'passwordConfirm required!'});
      return false;
    }

    if (value.passwordConfirm.length < 6) {
      this.alerts.push({type : 'danger', message: 'passwordConfirm length must be greater than 6!'});
      return false;
    }

    if (value.password !== value.passwordConfirm) {
      this.alerts.push({type : 'danger', message: 'password not match!'});
      return false;
    }

    if (!value.name) {
      this.alerts.push({type : 'danger', message: 'username required!'});
      return false;
    }

    if (!value.mobile) {
      this.alerts.push({type : 'danger', message: 'mobile required!'});
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


