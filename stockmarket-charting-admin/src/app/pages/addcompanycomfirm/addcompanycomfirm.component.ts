import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './addcompanycomfirm.component.html',
  styleUrls: ['./addcompanycomfirm.component.css']
})

export class AddcompanycomfirmComponent implements OnInit {

  public companyname;
  public turnover;
  public ceo;
  public directors;
  public exchanges;
  public sector;
  public writeup;
  public code;
  constructor(private userService: UserService, public activeRoute: ActivatedRoute, private router: Router ) {
    this.activeRoute.queryParams.subscribe(params => {
      this.companyname = params.companyname;
      this.turnover = params.turnover;
      this.ceo = params.ceo;
      this.directors = params.directors;
      this.exchanges = params.exchanges;
      this.sector = params.sector;
      this.writeup = params.writeup;
      this.code = params.code;
    });
  }

  ngOnInit(): void {
  }

  onback() {
    this.router.navigate(['/addCompany']);
  }
  /* 登录操作 */
  onSubmit(value: any) {
    this.router.navigate(['/mangeCompany']);
  }

}
