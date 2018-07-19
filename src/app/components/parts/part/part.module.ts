import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {PartComponent} from './part.component';

const routes = [
  {
    name: 'parts.part',
    url: '/:id/:typeOperation',
    component: PartComponent,
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
  declarations: [PartComponent],
  exports: []
})
export class PartModule {
}
