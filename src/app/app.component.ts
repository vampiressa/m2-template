import {Component, OnInit} from '@angular/core';
import {SpinnerService} from '@core/services/spinner.service';
import { UIRouter } from '@uirouter/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public showLoader: boolean;

  constructor(private spinnerService: SpinnerService, private router: UIRouter) {
  }

  ngOnInit() {
    this.spinnerService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    this.router.stateService.go('login');
  }

}
