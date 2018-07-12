import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {AreaComponent} from './area.component';

const routes = [
  {
    name: 'areas.area',
    url: '/:id/:typeOperation',
    component: AreaComponent,
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
  declarations: [AreaComponent],
  exports: []
})
export class AreaModule {
}
