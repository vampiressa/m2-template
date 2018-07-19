import {Injectable} from '@angular/core';
import {UIRouter} from '@uirouter/angular';
import {ApiService} from '@core/services/api.service';

@Injectable()
export class OauthService {


  public user = true;

  // private _regex = window.location.href.match(PatternsConstant.token);
  // private _urlToken = this._regex ? this._regex[1] : null;

  constructor(public router: UIRouter, public apiService: ApiService) {

  }

  public init() {

    // local dev

    // localStorage.setItem('token', 'Gh6WR6TNSHTLq7HJcW9h4Ut27sPLH9tz');

    // prod bitrix

    // if (this._urlToken) {
    // 	localStorage.setItem('token', this._urlToken);
    // 	//get user info
    // }
    // else {
    // 	this.router.stateService.go('404');
    // }

  }

  public login(body) {
    return this.apiService.login('/connect/token', body).subscribe(res => res);
  }

}
