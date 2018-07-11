import {Component, OnInit} from '@angular/core';
import {LoginInterface} from '@core/interfaces/login';
import {OauthService} from '@core/services/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public data = {} as LoginInterface;

  constructor(protected authService: OauthService) {
  }

  ngOnInit() {
  }

  public login() {
    this.authService.login(this.data, null);
  }

}
