import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpclient: HttpClient) { }

  executeHelloworldBeanService() {
    return this.httpclient.get("http://localhost:8080/hello-world-bean");
    // console.log("execute hello world bean service");
  }
}
