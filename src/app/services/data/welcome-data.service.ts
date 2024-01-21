import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { create, head } from 'cypress/types/lodash';

export class HelloworldBean{
  constructor(public message: string){
    
  }
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private httpclient: HttpClient) { }

  executeHelloworldBeanService() {
    return this.httpclient.get<HelloworldBean>("http://localhost:8080/hello-world-bean");
    // console.log("execute hello world bean service");
  }
  executeHelloworldBeanServicewithPathVariable(name: string) {
    let basicAuthHeaderString = this.createAuthenticationHttpHeader()
    console.log("basicAuthHeaderString: " + basicAuthHeaderString)
    let header = new HttpHeaders({
      Authentication: basicAuthHeaderString
    })
    return this.httpclient.get<HelloworldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`,
    {headers: header});
    // console.log("execute hello world bean service");
  }
  createAuthenticationHttpHeader(): string{
    let username = 'umeshbalasaravanan'
    let password = 'dummy'
    let authenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    console.log("authenticationHeaderString: " + authenticationHeaderString)
    return authenticationHeaderString
  }
}
//Access to XMLHttpRequest at 'http://localhost:8080/login' 
//(redirected from 'http://localhost:8080/hello-world-bean/path-variable/umeshbalasaravanan') 
//from origin 'http://localhost:4200' has been blocked by CORS policy: 
//No 'Access-Control-Allow-Origin' header is present on the requested resource.

//Access to XMLHttpRequest at 'http://localhost:8080/login' 
//(redirected from 'http://localhost:8080/hello-world-bean/path-variable/umeshbalasaravanan') 
//from origin 'http://localhost:4200' has been blocked by CORS policy: 
//Response to preflight request doesn't pass access control check: 
//No 'Access-Control-Allow-Origin' header is present on the requested resource.//