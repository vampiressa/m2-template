import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
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
    req = req.clone({
      setHeaders: {
        accept: 'application/json',
        authorization: localStorage.getItem('token')
      }
    });

    return next.handle(req);
  }

  public get(link: string, params: object) {
    return this.http
      .get(environment.api + link, {params: params})
      .pipe(
        catchError(this.handleError)
      );
  }

  public post(link: string, body: object, params) {
    return this.http
      .post(environment.api + link, body, {params})
      .pipe(
        catchError(this.handleError)
      );
  }


  public put(link: string, body: object) {
    return this.http
      .put(environment.api + link, body, {headers: this.headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public delete(link: string) {
    return this.http
      .delete(environment.api + link, {headers: this.headers})
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
