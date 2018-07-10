import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {BacklogComponent} from './backlog.component';

const routes = [
  {
    name: 'backlog',
    url: '/backlog',
    component: BacklogComponent,
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
    BacklogComponent
  ]
})
export class BacklogModule {
}
