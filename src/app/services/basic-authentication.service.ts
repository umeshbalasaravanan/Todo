import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpclient: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)
  }

  logoutUser() {
    sessionStorage.removeItem("authenticatedUser")
    sessionStorage.removeItem('authenticatedToken')
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken(){
    // if(this.getAuthenticatedUser())
    //   return sessionStorage.getItem('authenticatedToken')
    return sessionStorage.getItem('authenticatedToken')
  }

  executeAuthenticationService(username: string, password: string) {
     let authenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    // console.log("authenticationHeaderString: " + authenticationHeaderString)
    // let header = new HttpHeaders({
    //   Authentication: authenticationHeaderString
    // })
    return this.httpclient.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
      //{ headers: header }
      ).pipe(
        map(
          data =>{
            sessionStorage.setItem("authenticatedUser", username)
            sessionStorage.setItem("authenticatedToken", authenticationHeaderString)
            return data
          }
        )
      );
    // console.log("execute hello world bean service");
  }
}
export class AuthenticationBean {
  constructor(public message: string) { }
}
