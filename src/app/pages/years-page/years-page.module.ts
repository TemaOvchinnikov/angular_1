import { CardAlbumsComponentModule } from './../../components/card-albums-component/card-albums-component.module';
import { LayoutComponentModule } from './../../components/layout-component/layout-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearsPageRoutingModule } from './years-page-routing.module';
import { YearsPage } from './years.page';

@NgModule({
  declarations: [YearsPage],
  imports: [
    CommonModule,
    YearsPageRoutingModule,
    LayoutComponentModule,
    CardAlbumsComponentModule,
  ],
  exports: [YearsPage],
})
export class YearsPageModule {}
