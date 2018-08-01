import {NgModule} from '@angular/core';
import {AccordionModule, BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [],
  exports: [
    AccordionModule,
    CollapseModule,
    BsDropdownModule,
    InfiniteScrollModule
  ]
})

export class LibsSharedModule {

}
