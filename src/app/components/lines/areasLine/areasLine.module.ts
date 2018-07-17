import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {AreasLineComponent} from './areasLine.component';

const routes = [
  {
    name: 'areas.line',
    url: '/:id/lines',
    views: {
      lineInAreas: {component: AreasLineComponent}
    },
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
    AreasLineComponent
  ],
  exports: []
})
export class AreasLineModule {
}
