import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {AppComponent} from './app.component';
import {RouteConfig} from '@core/configs/route.config';
import {CoreModule} from '@core/core.module';
import {ComponentsModule} from '@components/components.module';

const routes = [
  {
    name: 'root',
    url: '',
    data: {
      canActivate: {
        authGuard: true
      }
    }
    // redirectTo: 'login'
    //   views: {
    //       $default: {component: LoginComponent}
    //     }
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
