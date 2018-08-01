import {Component, OnInit, ViewChild} from '@angular/core';
import {OauthService} from '@core/services/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') private form;

  constructor(public authService: OauthService) {
  }

  ngOnInit() {
  }

  public login() {
    if (this.form.valid) {
      this.authService.login();
    }
  }

}
