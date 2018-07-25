import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {Transition, UIRouterModule} from '@uirouter/angular';
import {PlantComponent} from './plant.component';
import {PlantsService} from '@core/services/plants.service';

const routes = [
  {
    name: 'plants.new-plant',
    url: '/new-plant',
    component: PlantComponent,
    data: {
      canActivate: {
        authGuard: true
      }
    },
    resolve: [
      {
        token: 'null',
        deps: [Transition, PlantsService],
        resolveFn: (trans, plantsService) => plantsService.plant = {}
      }
    ]
  },
  {
    name: 'plants.plant',
    url: '/:id/edit-plant',
    component: PlantComponent,
    data: {
      canActivate: {
        authGuard: true
      }
    },
    resolve: [
      {
        token: 'null',
        deps: [Transition, PlantsService],
        resolveFn: (trans, plantsService) => plantsService.getPlant(trans.params().id)
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
  declarations: [PlantComponent],
  exports: [],
  providers: [PlantsService]
})
export class PlantModule {
}
