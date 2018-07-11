import {NgModule} from '@angular/core';
import {SharedModule} from '@components/shared/shared.module';
import {LoginModule} from '@components/login/login.module';
import {AlertsModule} from '@components/alerts/alerts.module';
import {BacklogModule} from '@components/backlog/backlog.module';
import {PlantsModule} from '@components/plants/plants.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    LoginModule,
    AlertsModule,
    BacklogModule,
    PlantsModule
  ],
  providers: [],
  exports: [
    SharedModule
  ]
})

export class ComponentsModule {

}
