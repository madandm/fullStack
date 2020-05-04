import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-add-new-confirm',
  templateUrl: './add-new-confirm.component.html',
  styleUrls: ['./add-new-confirm.component.css']
})
export class AddNewConfirmComponent implements OnInit {
  public name: any;
  constructor( public activeRoute: ActivatedRoute , private router: Router , private userService: UserService) {
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.name = params.name;
    });
  }
  onSubmit(value: any): void {
    this.router.navigate(['/mangeStock']);
    this.userService.postAddSubmit(value).subscribe();
  }

}
