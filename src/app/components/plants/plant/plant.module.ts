import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {Transition, UIRouterModule} from '@uirouter/angular';
import {PlantComponent} from './plant.component';
import {PlantsService} from '@core/services/plants.service';

export function resolver1(trans, plantsService) {
  return plantsService.getItem(trans.params().id);
}

export function resolver2(trans, plantsService) {
  return plantsService.clearItem();
}

const routes = [
  {
    name: 'plants.new',
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
        resolveFn: resolver2
      }
    ]
  },
  {
    name: 'plants.edit',
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
  declarations: [PlantComponent],
  exports: [],
  providers: [PlantsService]
})
export class PlantModule {
}
