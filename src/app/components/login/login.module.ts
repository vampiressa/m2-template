import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {LoginComponent} from './login.component';

const routes = [
  {
    name: 'login',
    url: '/login',
    component: LoginComponent
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
    LoginComponent
  ]
})
export class LoginModule {
}
