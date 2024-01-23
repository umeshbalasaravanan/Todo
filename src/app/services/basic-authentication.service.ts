import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { app_url } from '../app.constants';

export const TOKEN = "authenticatedToken"
export const AUTH_USER = "authenticatedUser"
@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {
  
  constructor(private httpclient: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTH_USER)
    return !(user === null)
  }

  logoutUser() {
    sessionStorage.removeItem(AUTH_USER)
    sessionStorage.removeItem(TOKEN)
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTH_USER)
  }

  getAuthenticatedToken(){
    // if(this.getAuthenticatedUser())
    //   return sessionStorage.getItem('authenticatedToken')
    return sessionStorage.getItem(TOKEN)
  }

  executeAuthenticationService(username: string, password: string) {
     let authenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    console.log("authenticationHeaderString: " + authenticationHeaderString)
    let header = new HttpHeaders({
      Authentication: authenticationHeaderString
    })
    return this.httpclient.get<AuthenticationBean>(`${app_url}/basicauth`,
      { headers: header }
      ).pipe(
        map(
          data =>{
            sessionStorage.setItem(AUTH_USER, username)
            sessionStorage.setItem(TOKEN, authenticationHeaderString)
            return data
          }
        )
      );
    // console.log("execute hello world bean service");
  }
  executeJWTAuthenticationService(username: string, password: string) {
    
   return this.httpclient.post<any>(`${app_url}/authenticate`,
     { username,
    password}
     ).pipe(
       map(
         data =>{
           sessionStorage.setItem(AUTH_USER, username)
           sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
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
