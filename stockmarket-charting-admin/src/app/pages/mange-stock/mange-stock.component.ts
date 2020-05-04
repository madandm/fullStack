import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-mange-stock',
  templateUrl: './mange-stock.component.html',
  styleUrls: ['./mange-stock.component.css']
})
export class MangeStockComponent implements OnInit {
  public stock;
  constructor( private router: Router , private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.postManageStock().subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        this.stock = info.stock;
      }
    );
  }
  onSubmit(value: any): void {
    this.router.navigate(['/add']);
  }
}
