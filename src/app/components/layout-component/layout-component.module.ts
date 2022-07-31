import { AsideComponentModule } from './../aside-component/aside-component.module';
import { HeaderComponentModule } from './../header-component/header-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderComponentModule,
    AsideComponentModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutComponentModule {}
