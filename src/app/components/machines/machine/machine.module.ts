import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {MachineComponent} from './machine.component';

const routes = [
  {
    name: 'machines.machine',
    url: '/:id/:typeOperation',
    component: MachineComponent,
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
  declarations: [MachineComponent],
  exports: []
})
export class MachineModule {
}
