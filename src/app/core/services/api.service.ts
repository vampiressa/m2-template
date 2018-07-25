import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UIRouter} from '@uirouter/angular';

@Injectable()
export class ApiService {

  constructor(protected http: HttpClient, protected router: UIRouter) {

  }

  public get(link: string, params: HttpParams) {
    return this.http
      .get(environment.api + '/api' + link, {params: params});
  }

  public post(link: string, body: object, params: HttpParams) {
    return this.http
      .post(environment.api + '/api' + link, body, {params: params});
  }


  public put(link: string, body: object, params: HttpParams) {
    return this.http
      .put(environment.api + '/api' + link, body, {params: params});
  }

  public delete(link: string) {
    return this.http
      .delete(environment.api + '/api' + link);
  }

}
