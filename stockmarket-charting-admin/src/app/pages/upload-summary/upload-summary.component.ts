import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-summary',
  templateUrl: './upload-summary.component.html',
  styleUrls: ['./upload-summary.component.css']
})
export class UploadSummaryComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(value: any) {
      this.router.navigate(['/updateIPO']);
  }
}
