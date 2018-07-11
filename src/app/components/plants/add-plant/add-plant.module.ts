import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {AddPlantComponent} from './add-plant.component';

const routes = [
  {
    name: 'plants.add-plant',
    url: '/add-plant',
    component: AddPlantComponent,
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
  declarations: [AddPlantComponent],
  exports: []
})
export class AddPlantModule {
}
