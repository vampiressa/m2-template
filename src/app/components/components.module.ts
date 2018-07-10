import {NgModule} from '@angular/core';
import {SharedModule} from '@components/shared/shared.module';
import {LoginModule} from '@components/login/login.module';
import {AlertsModule} from '@components/alerts/alerts.module';
import {BacklogModule} from '@components/backlog/backlog.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    LoginModule,
    AlertsModule,
    BacklogModule
  ],
  providers: [],
  exports: [
    SharedModule
  ]
})

export class ComponentsModule {

}
