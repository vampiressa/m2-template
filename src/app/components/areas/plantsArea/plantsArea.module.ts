import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {PlantsAreaComponent} from './plantsArea.component';

const routes = [
  {
    name: 'plants.area',
    url: '/:id/areas',
    views: {
      areaInPlants: {component: PlantsAreaComponent}
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
    PlantsAreaComponent
  ],
  exports: []
})
export class PlantsAreaModule {
}
