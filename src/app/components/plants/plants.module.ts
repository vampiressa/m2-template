import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {LibsSharedModule} from '@core/shared/libs.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {PlantsComponent} from './plants.component';
import {PlantModule} from '@components/plants/plant/plant.module';
import {PlantsService} from '@core/services/plants.service';

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
    LibsSharedModule,
    UIRouterModule.forChild({
      states: routes
    }),
    PlantModule
  ],
  declarations: [
    PlantsComponent
  ],
  exports: [],
  providers: [PlantsService]
})
export class PlantsModule {
}
