import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let username = 'umeshbalasaravanan'
    let password = 'dummy'
    let authenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    req = req.clone({
      setHeaders: {
        Authorization: authenticationHeaderString
      }
    })
    return next.handle(req);
  }
}
