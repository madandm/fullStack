import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  public stock;
  constructor( private router: Router) {
  }

  ngOnInit(): void {
  }
  onSubmit(value: any): void {
    this.router.navigate(['/confirm'],
    {queryParams:
      {name: value.name}});
  }

}
