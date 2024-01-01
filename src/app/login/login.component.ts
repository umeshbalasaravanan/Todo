import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "umeshbalasaravanan"
  password = ""
  errorMessage = "Invalid Credantials"
  invalidLogin = false

  constructor(private router: Router,
    public hardcodedauthenticationservice: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.info("username: " + this.username)
    console.log("password: " + this.password)
    if (this.hardcodedauthenticationservice.authenticationService(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(["welcome", this.username])
    } else {
      this.invalidLogin = true
    }
  }

}
