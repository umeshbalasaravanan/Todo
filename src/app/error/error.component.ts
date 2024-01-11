import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMsg = "Please contact support team at 989-9787-0909"
  constructor() { }

  ngOnInit(): void {
  }

}
