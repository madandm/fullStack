import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../services/company.service';
import {StockPriceService} from '../../services/stockprice.service';
import { Router } from '@angular/router';
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
  chartOption1: any;
  chartOption2: any;
  chartOption3: any;
  constructor(private router: Router , private companyService: CompanyService , private  stockPriceService: StockPriceService) {
  }

  ngOnInit() {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
  }
  /* Search */
  onSubmit(value: any) {
      this.flag = false;
      this.companyService.postSearch(value.name).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (!info.companyName) {
              this.alerts.push({type : 'info', message: 'There is no company match!'});
          } else {
            this.flag = true;
            console.log('There is company match!');
            this.name = info.companyName;
            this.code = info.companyCode;
            this.turnover = info.turnOver;
            this.ceo = info.ceo;
            this.directors = info.boardOfDrectors;
            this.exchanges = info.exchangeName;
            this.sector = info.sectorName;
            this.profile = info.brief;
          }
        }
      );

      this.stockPriceService.postEcharSearch(value.name).subscribe(
        data1 => {
          console.log(JSON.stringify(data1));
          const info: any = data1;
          this.flag = true;
          this.dayPrice = info.dayPrice;
          this.weekPrice = info.weekPrice;
          this.monthPrice = info.monthPrice;
          this.dayPeriod = info.dayPeriod;
          this.weekPeriod = info.weekPeriod;
          this.monthPeriod = info.monthPeriod;
          this.price = info.price;
          this.chartOption1 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
              feature: {
                  saveAsImage: {show: true}
              }
          },
              xAxis: {
                data: this.dayPeriod
            },
            yAxis: {
            },
            series: [{
              type: 'k',
              data: this.dayPrice,
              itemStyle: {
                color0: '#14b143',
                borderColor0: '#14b143'
              }
              }]
          };
          this.chartOption2 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
              feature: {
                  saveAsImage: {show: true}
              }
          },
              xAxis: {
                data: this.weekPeriod
            },
            yAxis: {
            },
            series: [{
              type: 'k',
              data: this.weekPrice,
              itemStyle: {
                color0: '#14b143',
                borderColor0: '#14b143'
              }
              }]
          };
          this.chartOption3 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
              feature: {
                  saveAsImage: {show: true}
              }
          },
              xAxis: {
                data: this.monthPeriod
            },
            yAxis: {
            },
            series: [{
              type: 'k',
              data: this.monthPrice,
              itemStyle: {
                color0: '#14b143',
                borderColor0: '#14b143'
              }
              }]
          };
        }
      );

  }
}
