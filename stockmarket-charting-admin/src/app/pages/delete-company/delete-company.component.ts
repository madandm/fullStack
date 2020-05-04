import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {
  name: any;
  code: any;
  exchange: any;
  profile: any;
  constructor( private router: Router , private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.postDeleteCompany().subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        this.name = info.name;
        this.code = info.code;
        this.exchange = info.exchange;
        this.profile = info.profile;
      }
    );
  }

  onSubmit(value: any): void {
    this.router.navigate(['/mangeCompany']);
  }
}
