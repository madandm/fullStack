import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { UserService } from '../../services/user.service';
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
  public dayPrice: any;
  public dayPeriod: any;
  private info: any;
  title = 'app';
  constructor(public activeRoute: ActivatedRoute , private userService: UserService) {
    this.activeRoute.queryParams.subscribe(params => {
      this.info = params;
      this.name1 = this.info.name1;
      this.name2 = this.info.name2;
    });
    this.getEchar(this.info).then(data => {
      const infoPrice: any = data;
      console.log(infoPrice.count);
      this.dayPrice = infoPrice.stockPrice.dayPrice;
      this.dayPeriod = infoPrice.stockPrice.dayPeriod;
      console.log(infoPrice);
    }).catch(() => console.log('promise catch err'));
  }

  async getEchar(value){
    const data = await this.userService.postEcharcompare(value);
    console.log(data);
    return data;
  }
  ngOnInit(){
  }
}
