import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authenticationHeaderString = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()
    // let authenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    if(username && authenticationHeaderString){
      req = req.clone({
        setHeaders: {
          Authorization: authenticationHeaderString 
        }
      })
    }
    return next.handle(req);
  }
}
