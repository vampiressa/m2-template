import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {Transition, UIRouterModule} from '@uirouter/angular';
import {PlantsAreaComponent} from './plantsArea.component';
import {AreasService} from '@core/services/areas.service';

export function resolver1(trans, areasService) {
  return areasService.getItemsByPlant(trans.params().id);
}

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
    },
    resolve: [
      {
        token: 'null',
        deps: [Transition, AreasService],
        resolveFn: resolver1
      }
    ]
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
  exports: [],
  providers: [AreasService]
})
export class PlantsAreaModule {
}
