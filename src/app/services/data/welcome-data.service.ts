import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

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
    return this.httpclient.get<HelloworldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`);
    // console.log("execute hello world bean service");
  }
}
