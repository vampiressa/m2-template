import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {LibsSharedModule} from '@core/shared/libs.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {LinesComponent} from './lines.component';
import {LineModule} from '@components/lines/line/line.module';
import {AreasLineModule} from '@components/lines/areasLine/areasLine.module';

const routes = [
  {
    name: 'lines',
    url: '/lines',
    component: LinesComponent,
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
    LibsSharedModule,
    UIRouterModule.forChild({
      states: routes
    }),
    LineModule,
    AreasLineModule
  ],
  declarations: [
    LinesComponent
  ],
  exports: []
})
export class LinesModule {
}
