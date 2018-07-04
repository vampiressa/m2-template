import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/common/http';
import {UIRouter} from '@uirouter/angular';
import {UrlsConstant} from '@core/constants/urls.constant';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  private headers = new Headers({
    'Accept': 'application/json',
    'Authorization': localStorage.getItem('token')
  });

  constructor(private http: Http, private router: UIRouter) {

  }

  public get(link: string, params: object) {
    return this.http
      .get(UrlsConstant.api + link, new RequestOptions({headers: this.headers, params: params}))
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public post(link: string, body: object) {
    return this.http
      .post(UrlsConstant.api + link, body, new RequestOptions({headers: this.headers}))
      .map(response => {
        return response.json();
      }, error => {
        return error;
      })
      .catch(this.handleError);
  }

  public put(link: string, body: object) {
    return this.http
      .put(UrlsConstant.api + link, body, new RequestOptions({headers: this.headers}))
      .map(response => {
        return response.json();
      }, error => {
        return error;
      })
      .catch(this.handleError);
  }

  public delete(link: string) {
    return this.http
      .delete(UrlsConstant.api + link, new RequestOptions({headers: this.headers}))
      .map(response => null)
      .catch(this.handleError);
  }

  public handleError(error: Response | any) {
    if (error.status === 403) {
      return this.router.stateService.go('404');
    }
    return Observable.throw(error);
  }

}
