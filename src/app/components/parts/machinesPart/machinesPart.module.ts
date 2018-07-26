import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {MachinesPartComponent} from './machinesPart.component';

const routes = [
  {
    name: 'plants.area.lines.machines.parts',
    url: '/:id/parts',
    views: {
      partInMachines: {component: MachinesPartComponent}
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
    MachinesPartComponent
  ],
  exports: []
})
export class MachinesPartModule {
}
