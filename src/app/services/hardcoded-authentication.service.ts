import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticationService(username: string, passsword: string): boolean{
    console.log("Before login: " + this.isLoggedIn());
    if(username === "umeshbalasaravanan" && passsword === "dummy"){
      sessionStorage.setItem('authenticationUser', username);
      console.log("After login: " + this.isLoggedIn());
       return true;
    }else{
      return false;
    }
  }

  isLoggedIn(){
     let user = sessionStorage.getItem('authenticationUser');
      return !(user === null)
  }
}
