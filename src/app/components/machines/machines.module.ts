import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {LibsSharedModule} from '@core/shared/libs.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {MachinesComponent} from './machines.component';
import {MachineModule} from '@components/machines/machine/machine.module';
import {LinesMachineModule} from '@components/machines/linesMachine/linesMachine.module';

const routes = [
  {
    name: 'machines',
    url: '/machines',
    component: MachinesComponent,
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
    MachineModule,
    LinesMachineModule
  ],
  declarations: [
    MachinesComponent
  ],
  exports: []
})
export class MachinesModule {
}
