import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private harcdcodedAuthenticatedService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.harcdcodedAuthenticatedService.logoutUser();
  }

}
