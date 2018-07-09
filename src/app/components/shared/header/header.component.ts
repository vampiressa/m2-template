import {Component, OnInit} from '@angular/core';
import {OauthService} from '@core/services/oauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public authService: OauthService) {

  }

  ngOnInit() {

  }

}

