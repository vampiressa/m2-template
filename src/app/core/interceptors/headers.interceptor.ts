import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(protected http: HttpClient) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authData: any = JSON.parse(localStorage.getItem('authData'));

    const headers = new HttpHeaders({
      'Authorization': authData.token_type + ' ' + authData.access_token
    });

    return next.handle(req.clone({headers: headers}));
  }

}
