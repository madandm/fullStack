import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
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

  constructor(private userService: UserService, private router: Router) {
    this.reset();
  }

  ngOnInit(): void {
  }

  /* 登录操作 */
  onSubmit(value: any) {
    if (this.validInput(value)) {
      this.router.navigate(['/updateIPO']);
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
