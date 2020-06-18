import { Component, OnInit } from '@angular/core';
import {ChangeProfileService} from '../../services/changeprofile.service';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];
@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  alerts: Alert[];
  public userinfo;
  constructor(private changeService: ChangeProfileService, private router: Router) {
    this.reset();
   }

  ngOnInit(): void {

    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
  }
  onSubmit(value: any) {
    if (this.validInput(value)) {
    this.changeService.postChangepassword(sessionStorage.getItem('username'), value.passwordNew).subscribe(
        data => {
          console.log(JSON.stringify(data));
          this.alerts.push({type : 'success', message: 'update success!'});
        }
        , error => {
          this.alerts.push({type : 'success', message: 'update fail!'});
        }
      );
    }
  }

  validInput(value: any): boolean {
    this.reset();
    if (!value.passwordNew) {
      this.alerts.push({type : 'danger', message: 'passwordNew required!'});
      return false;
    }

    if (!value.passwordConfirm) {
      this.alerts.push({type : 'danger', message: 'passwordConfirm required!'});
      return false;
    }
    if (value.passwordNew.length < 6) {
      this.alerts.push({type : 'danger', message: 'password length must be greater than 6!'});
      return false;
    }

    if (value.passwordNew !== value.passwordConfirm) {
      this.alerts.push({type : 'danger', message: 'password not match'});
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
