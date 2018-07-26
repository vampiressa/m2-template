import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {Transition, UIRouterModule} from '@uirouter/angular';
import {AreaComponent} from './area.component';
import {AreasService} from '@core/services/areas.service';

export function resolver1(trans, areasService) {
  return areasService.getItem(trans.params().id);
}

export function resolver2(trans, areasService) {
  return areasService.clearItem();
}

const routes = [
  {
    name: 'areas.new',
    url: '/new-area',
    component: AreaComponent,
    data: {
      canActivate: {
        authGuard: true
      }
    },
    resolve: [
      {
        token: 'null',
        deps: [Transition, AreasService],
        resolveFn: resolver2
      }
    ]
  },
  {
    name: 'areas.edit',
    url: '/:id/edit-plant',
    component: AreaComponent,
    data: {
      canActivate: {
        authGuard: true
      }
    },
    resolve: [
      {
        token: 'null',
        deps: [Transition, AreasService],
        resolveFn: resolver1
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
  declarations: [AreaComponent],
  exports: [],
  providers: [AreasService]
})
export class AreaModule {
}
