import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {LibsSharedModule} from '@core/shared/libs.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {AreasComponent} from './areas.component';
import {AreaModule} from '@components/areas/area/area.module';
import {PlantsAreaModule} from '@components/areas/plantsArea/plantsArea.module';

const routes = [
  {
    name: 'areas',
    url: '/areas',
    component: AreasComponent,
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
    AreaModule,
    PlantsAreaModule
  ],
  declarations: [
    AreasComponent
  ],
  exports: []
})
export class AreasModule {
}
