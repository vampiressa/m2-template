import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {LibsSharedModule} from '@core/shared/libs.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {PartsComponent} from './parts.component';
import {PartModule} from '@components/parts/part/part.module';
import {MachinesPartModule} from '@components/parts/machinesPart/machinesPart.module';

const routes = [
  {
    name: 'parts',
    url: '/parts',
    component: PartsComponent,
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
    PartModule,
    MachinesPartModule
  ],
  declarations: [
    PartsComponent
  ],
  exports: []
})
export class PartsModule {
}
