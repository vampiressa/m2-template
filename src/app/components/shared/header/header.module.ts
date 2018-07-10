import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {UIRouterModule} from '@uirouter/angular';
import {HeaderComponent} from '@components/shared/header/header.component';
import {LibsSharedModule} from '@core/shared/libs.shared.module';

@NgModule({
  imports: [
    AngularSharedModule,
    LibsSharedModule,
    UIRouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule {

}
