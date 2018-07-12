import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UIRouter} from '@uirouter/angular';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApiService implements HttpInterceptor {

  constructor(protected http: HttpClient, protected router: UIRouter) {
//     let Params = new HttpParams();
//
// // Begin assigning parameters
//     Params = Params.append('firstParameter', firstVal);
//     Params = Params.append('secondParameter', secondVal);


  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Authorization': 'token 123',
      'Content-Type': 'application/json'
    });

    return next.handle(req.clone({headers: headers}));

  }


  public login(link: string, body: object, params: HttpParams) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http
      .post(environment.api + link, body, {params: params, headers: headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public get(link: string, params: HttpParams) {
    return this.http
      .get(environment.api + link, {params: params})
      .pipe(
        catchError(this.handleError)
      );
  }

  public post(link: string, body: object, params: HttpParams) {
    return this.http
      .post(environment.api + link, body, {params: params})
      .pipe(
        catchError(this.handleError)
      );
  }


  public put(link: string, body: object, params: HttpParams) {
    return this.http
      .put(environment.api + link, body, {params: params})
      .pipe(
        catchError(this.handleError)
      );
  }

  public delete(link: string) {
    return this.http
      .delete(environment.api + link)
      .pipe(
        catchError(this.handleError)
      );
  }

  public handleError(error: Response | any) {
    if (error.status === 403) {
      return this.router.stateService.go('404');
    }
    return throwError(error);
  }

}
