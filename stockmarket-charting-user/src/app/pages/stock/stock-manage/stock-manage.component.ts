import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
}

