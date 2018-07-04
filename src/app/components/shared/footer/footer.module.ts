import {NgModule} from '@angular/core';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {FooterComponent} from '@components/shared/footer/footer.component';

@NgModule({
  imports: [
    AngularSharedModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})

export class FooterModule {

}
