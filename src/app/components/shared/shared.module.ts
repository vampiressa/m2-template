import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from '@components/shared/header/header.module';
import {FooterModule} from '@components/shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [],
  exports: [
    HeaderModule,
    FooterModule
  ]
})

export class SharedModule {

}
