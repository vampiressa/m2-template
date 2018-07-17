import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {LineComponent} from './line.component';

const routes = [
  {
    name: 'lines.line',
    url: '/:id/:typeOperation',
    component: LineComponent,
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
  declarations: [LineComponent],
  exports: []
})
export class LineModule {
}
