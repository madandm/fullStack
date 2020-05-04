import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(value: any) {
}
}
