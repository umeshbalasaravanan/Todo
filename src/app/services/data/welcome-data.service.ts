import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    console.log("Execute hello world bean service")
    return this.http.get("http://localhost:8080/hello-world-bean")
  }
}
