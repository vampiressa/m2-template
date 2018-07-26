import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {LinesMachineComponent} from './linesMachine.component';

const routes = [
  {
    name: 'plants.area.lines.machines',
    url: '/:id/machines',
    views: {
      machineInLines: {component: LinesMachineComponent}
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
    LinesMachineComponent
  ],
  exports: []
})
export class LinesMachineModule {
}
