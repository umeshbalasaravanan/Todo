import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticationService(username: string, passsword: string): boolean {
    if (username === "umeshbalasaravanan" && passsword === "dummy") {
      sessionStorage.setItem("authenticatedUser", username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)
  }
  
  logoutUser(){
    sessionStorage.removeItem("authenticatedUser")
  }
}
