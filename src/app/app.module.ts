import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {AppComponent} from './app.component';
import {RouteConfig} from '@core/configs/route.config';
import {CoreModule} from '@core/core.module';
import {ComponentsModule} from '@components/components.module';
import {SpinnerService} from '@core/services/spinner.service';

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
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
