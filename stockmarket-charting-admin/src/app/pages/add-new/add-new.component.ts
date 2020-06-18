import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ManageStockService} from '../../services/manageStock.service';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  alerts: Alert[];
  public stock;
  constructor( private router: Router, private manageStockService: ManageStockService) {
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/sign-in']);
    }
  }
  onSubmit(value: any): void {
    this.manageStockService.postAddStock(value).subscribe(
      data => {
        this.router.navigate(['/mangeStock']);
      },
      error => {
        this.alerts.push({type : 'danger', message: 'update fail!'});
      }
    );

  }

}
