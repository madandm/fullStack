import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ManageStockService} from '../../services/manageStock.service';

@Component({
  selector: 'app-mange-stock',
  templateUrl: './mange-stock.component.html',
  styleUrls: ['./mange-stock.component.css']
})
export class MangeStockComponent implements OnInit {
  public stock;
  constructor( private router: Router , private manageStockService: ManageStockService) {
    this.manageStockService.postManageStock().subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        this.stock = info.stock;
      }
    );
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
  }
  onSubmit(value: any): void {
    this.router.navigate(['/add']);
  }
}
