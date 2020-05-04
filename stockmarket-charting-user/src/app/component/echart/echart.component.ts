import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css']
})
export class EchartComponent implements OnInit {
  private dataPrice: [];
  private dataPeriod: [];
  /*for compare ui*/
  @Input() name1: string;
  @Input() name2: string;
  /*for search ui*/
  @Input() dayPrice: [];
  @Input() weekPrice: [];
  @Input() monthPrice: [];
  @Input() dayPeriod: [];
  @Input() weekPeriod: [];
  @Input() monthPeriod: [];
  chartOption1: any;
  chartOption2: any;
  flag = false;
  ngOnInit(): void {
    if (this.name2){
      this.flag = true;
    }
    if (this.dayPrice){
      this.dataPrice = this.dayPrice;
    }else if (this.weekPrice){
      this.dataPrice = this.weekPrice;
    }else if (this.monthPrice){
      this.dataPrice = this.monthPrice;
    }

    if (this.dayPeriod){
      this.dataPeriod = this.dayPeriod;
    }else if (this.weekPeriod){
      this.dataPeriod = this.weekPeriod;
    }else if (this.monthPeriod){
      this.dataPeriod = this.monthPeriod;
    }
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
          data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27', '2017-10-28', '2017-10-29', '2017-10-30']
      },
      yAxis: {
      },
      series: [{
        type: 'k',
        data: [
          [20, 30, 10, 35],
          [40, 35, 30, 50],
          [33, 38, 33, 40],
          [40, 40, 32, 42],
          [33, 38, 33, 40],
          [20, 30, 10, 35],
          [45, 38, 33, 40]
        ],
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
        // TODO
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27', '2017-10-28', '2017-10-29', '2017-10-30']
    },
    yAxis: {},
    series: [{
      type: 'k',
      data: [
          [20, 30, 10, 35],
          [40, 35, 30, 50],
          [33, 38, 33, 40],
          [40, 40, 32, 42],
          [33, 38, 33, 40],
          [20, 30, 10, 35],
          [45, 38, 33, 40]
        ],
        itemStyle: {
          color0: '#14b143',
          borderColor0: '#14b143'
        }
      }]
    };
  }
}
