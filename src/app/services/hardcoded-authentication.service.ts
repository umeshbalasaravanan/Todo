import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticationService(username: string, passsword: string): boolean{
    if(username === "umeshbalasaravanan" && passsword === "dummy"){
       return true;
    }else{
      return false;
    }
  }
}
