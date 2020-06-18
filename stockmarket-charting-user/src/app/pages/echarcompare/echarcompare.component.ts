import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';
import { StockPriceService } from '../../services/StockPrice.service';
@Component({
  selector: 'app-echarcompare',
  templateUrl: './echarcompare.component.html',
  styleUrls: ['./echarcompare.component.css']
})
export class EcharcompareComponent implements OnInit {
  public name1: any;
  public periodfrom: any;
  public periodEnd: any;
  public name2: any;
  public chartOption1: any;
  public chartOption2: any;
  public flag: any;
  private info: any;
  title = 'app';
  constructor(private router: Router , public activeRoute: ActivatedRoute , private stockPriceService: StockPriceService) {
    this.activeRoute.queryParams.subscribe(params => {
      this.info = params;
      this.name1 = this.info.name1;
      this.name2 = this.info.name2;
      this.periodfrom = this.info.periodFrom;
      this.periodEnd = this.info.periodEnd;
    });
  }
  ngOnInit(){
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
    this.flag = false;

    if (this.name2){
      this.flag = true;
    }
    this.stockPriceService.postEcharcompare(this.info).subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
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
            xAxis: {
              data: info[0].dataPeriod
          },
          yAxis: {},
          series: [{
            type: 'k',
            data: info[0].dataPrice,
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
            xAxis: {
              data: info[1].dataPeriod
          },
          yAxis: {},
          series: [{
            type: 'k',
            data: info[1].dataPrice,
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
