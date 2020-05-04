import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../services/user.service';
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
  constructor( private router: Router , private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(value: any): void {
    this.userService.postCompare(value).subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        if (0 === info.count) {
            console.log('There is no company match!');
            this.alerts.push({type : 'danger', message: 'There is no company match!'});
        } else {
          this.router.navigate(['/echart'],
          {queryParams:
            {name1: value.name1, periodfrom: value.dp1, periodEnd: value.dp2, name2: value.name2}
          });
          console.log('There is company match!');
        }
      }
    );
}
}
