import {NgModule} from '@angular/core';
import {AccordionModule, BsDropdownModule, CollapseModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  exports: [
    AccordionModule,
    CollapseModule,
    BsDropdownModule
  ]
})

export class LibsSharedModule {

}
