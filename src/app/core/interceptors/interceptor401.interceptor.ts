import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {OauthService} from '@core/services/oauth.service';
import {SpinnerService} from '@core/services/spinner.service';

@Injectable()
export class Interceptor401 implements HttpInterceptor {

  constructor(protected http: HttpClient, protected authService: OauthService, private spinnerService: SpinnerService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    return next.handle(req).pipe(
      finalize(() => {
        this.spinnerService.display(false);
      }),
      catchError(err => {

        if (err.status === 401) {
          this.spinnerService.display(false);
          this.authService.logOut();
        }

        return throwError(err);

      }));
  }

}
