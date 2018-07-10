import {NgModule} from '@angular/core';
import {AccordionModule, CollapseModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  exports: [
    AccordionModule,
    CollapseModule
  ]
})

export class LibsSharedModule {

}
