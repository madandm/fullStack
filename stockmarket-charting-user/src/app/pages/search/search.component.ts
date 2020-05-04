import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public name;
  public price;
  public code;
  public turnover;
  public ceo;
  public directors;
  public exchanges;
  public sector;
  public profile;
  // for echart component
  public dayPrice;
  public weekPrice;
  public monthPrice;
  public dayPeriod;
  public monthPeriod;
  public weekPeriod;
  flag = false;
  alerts: Alert[];
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }
  /* Search */
  onSubmit(value: any) {
      this.flag = false;
      this.userService.postSearch(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (0 === info.count) {
              console.log('There is no company match!');
              this.alerts.push({type : 'danger', message: 'There is no company match!'});
          } else {
            this.flag = true;
            console.log('There is company match!');
          }
          this.name = info.company.name;
          this.price = info.company.price;
          this.code = info.company.code;
          this.turnover = info.company.turnover;
          this.ceo = info.company.ceo;
          this.directors = info.company.directors;
          this.exchanges = info.company.exchanges;
          this.sector = info.company.sector;
          this.profile = info.company.profile;
          this.dayPrice = info.stockPrice.dayPrice;
          this.weekPrice = info.stockPrice.weekPrice;
          this.monthPrice = info.stockPrice.monthPrice;
          this.dayPeriod = info.stockPrice.dayPeriod;
          this.monthPeriod = info.stockPrice.monthPeriod;
          this.weekPeriod = info.stockPrice.weekPeriod;
        }
      );

  }
}
