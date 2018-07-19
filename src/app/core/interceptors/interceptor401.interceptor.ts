import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {OauthService} from '@core/services/oauth.service';

@Injectable()
export class Interceptor401 implements HttpInterceptor {

  constructor(protected http: HttpClient, protected authService: OauthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    return next.handle(req).pipe(catchError(err => {

      if (err.status === 401) {
        this.authService.logOut();
      }

      return throwError(err);

    }));
  }

}
