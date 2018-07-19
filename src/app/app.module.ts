import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {UIRouterModule, UrlService} from '@uirouter/angular';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HeadersInterceptor} from '@core/interceptors/headers.interceptor';
import {Interceptor401} from '@core/interceptors/interceptor401.interceptor';
import {AppComponent} from './app.component';
import {RouteConfig} from '@core/configs/route.config';
import {CoreModule} from '@core/core.module';
import {ComponentsModule} from '@components/components.module';
import {SpinnerService} from '@core/services/spinner.service';
import {OauthService} from '@core/services/oauth.service';

const routes = [
  {
    name: 'root',
    url: '',
    data: {
      canActivate: {
        authGuard: true
      }
    }
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ComponentsModule,
    UIRouterModule.forRoot({
      states: routes,
      config: RouteConfig
    })
  ],
  providers: [
    SpinnerService,
    OauthService,
    {
      provide: APP_INITIALIZER,
      useFactory: (os: OauthService, urlService: UrlService) => {
        urlService.deferIntercept();
        return () => os.init();
      },
      deps: [OauthService, UrlService],
      multi: true
    },
    {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor401, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
