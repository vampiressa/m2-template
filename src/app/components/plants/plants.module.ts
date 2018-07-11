import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {PlantsComponent} from './plants.component';
import {AddPlantModule} from '@components/plants/add-plant/add-plant.module';

const routes = [
  {
    name: 'plants',
    url: '/plants',
    component: PlantsComponent,
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
    }),
    AddPlantModule
  ],
  declarations: [
    PlantsComponent
  ],
  exports: []
})
export class PlantsModule {
}
