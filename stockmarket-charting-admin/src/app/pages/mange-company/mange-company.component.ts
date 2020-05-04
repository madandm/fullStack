import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-mange-company',
  templateUrl: './mange-company.component.html',
  styleUrls: ['./mange-company.component.css']
})
export class MangeCompanyComponent implements OnInit {

  page = 2;
  names: any;
  codes: any;
  exchanges: any;
  profile: any;
  constructor( private router: Router , private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.postManageCompany().subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        this.names = info.names;
        this.codes = info.codes;
        this.exchanges = info.exchanges;
        this.profile = info.profile;
      }
    );
  }
  addCompany(): void {
    this.router.navigate(['/addCompany']);
  }

  editCompany(value: any): void {
    this.router.navigate(['/editCompany']);
  }
  onSubmit(value: any): void {
    this.router.navigate(['/deleteCompany']);
  }

}
