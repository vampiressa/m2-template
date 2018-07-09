import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UIRouter} from '@uirouter/angular';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService implements HttpInterceptor {

  constructor(private http: HttpClient, private router: UIRouter) {

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

  // public get(link: string, params: object) {
  //   return this.http
  //     .get(environment.api + link, {params: params})
  //     .pipe(
  //       map(res => res.json()),
  //       catchError(this.handleError)
  //     ).subscribe(res);
  //   // .map(response => {
  //   //   return response.json();
  //   // })
  //   // .catch(this.handleError);
  // }
  //
  // public post(link: string, body: object) {
  //   return this.http
  //     .post(environment.api + link, body, {headers: this.headers})
  //     .map(response => {
  //       return response.json();
  //     }, error => {
  //       return error;
  //     })
  //     .catch(this.handleError);
  // }
  //
  // public put(link: string, body: object) {
  //   return this.http
  //     .put(environment.api + link, body, {headers: this.headers})
  //     .map(response => {
  //       return response.json();
  //     }, error => {
  //       return error;
  //     })
  //     .catch(this.handleError);
  // }
  //
  // public delete(link: string) {
  //   return this.http
  //     .delete(environment.api + link, {headers: this.headers})
  //     .map(response => null)
  //     .catch(this.handleError);
  // }
  //
  // public handleError(error: Response | any) {
  //   if (error.status === 403) {
  //     return this.router.stateService.go('404');
  //   }
  //   return ErrorObservable.create(error);
  // }

}
