import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ApiService} from '@core/services/api.service';
import {OauthService} from '@core/services/oauth.service';
import {AngularSharedModule} from '@core/shared/angular.shared.module';
import {LibsSharedModule} from '@core/shared/libs.shared.module';
import {PhonePipe} from '@core/pipes/phone.pipe';

@NgModule({
  declarations: [
    PhonePipe
  ],
  imports: [
    HttpModule,
    AngularSharedModule,
    LibsSharedModule
  ],
  providers: [
    ApiService,
    OauthService
  ],
  exports: [
    AngularSharedModule,
    LibsSharedModule,
    PhonePipe
  ]
})

export class CoreModule {

}
