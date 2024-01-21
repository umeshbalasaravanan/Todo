import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';
import { error } from 'cypress/types/jquery';

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
    private hardcodedauthenticationservice: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log("username: " + this.username)
    // console.log("password: " + this.password)
    if (this.hardcodedauthenticationservice.authenticationService(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(["welcome", this.username])
    } else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {
    
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }
}
