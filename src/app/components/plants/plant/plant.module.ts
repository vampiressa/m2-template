import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {Transition, UIRouterModule} from '@uirouter/angular';
import {PlantComponent} from './plant.component';
import {SpinnerService} from '@core/services/spinner.service';

const routes = [
  {
    name: 'plants.plant',
    url: '/:id/:typeOperation',
    component: PlantComponent,
    data: {
      canActivate: {
        authGuard: true
      }
    },
    resolve: [
      {
        token: 'data',
        deps: [Transition, SpinnerService],
        resolveFn: function (trans, spinnerService) {
          // peopleSvc.getPerson(trans.params().personId);
          // spinnerService.display(true);
          return {
            id: 1,
            name: 'test'
          };
        }
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
  exports: []
})
export class PlantModule {
}
