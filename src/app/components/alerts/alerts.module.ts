import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {AlertsComponent} from './alerts.component';

const routes = [
  {
    name: 'alerts',
    url: '/alerts',
    component: AlertsComponent,
    data: {
      canActivate: {
        authGuard: true
      }
    }
  }
];

@NgModule({
  imports: [
    AngularSharedModule,
    UIRouterModule.forChild({
      states: routes
    })
  ],
  declarations: [
    AlertsComponent
  ]
})
export class AlertsModule {
}
