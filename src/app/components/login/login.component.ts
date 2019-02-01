<<<<<<< HEAD
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
=======
import {Component, OnInit, ViewChild} from '@angular/core';
import {OauthService} from '@core/services/oauth.service';
import { UIRouter } from '@uirouter/core';
import { ShowHideInput } from '../../core/directives/show-hide-input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') private form;
  @ViewChild(ShowHideInput) input: ShowHideInput;
  show = false;

  constructor(public authService: OauthService, private router: UIRouter) {
  }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
    if (this.show) {
      this.input.changeType("text");
    } else {
      this.input.changeType("password");
    }
  }

  public login() {
    if (this.form.valid) {
      this.authService.login().subscribe(
        (res)=> {
          this.authService.setTokenAndSetUserData(res, true);
          this.router.stateService.go('alerts');
        }
      );
    }
  }

}
>>>>>>> 028fe02... login
