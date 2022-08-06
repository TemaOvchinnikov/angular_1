import { CardBeatsComponentModule } from './../../components/card-beats-component/card-beats-component.module';
import { LayoutComponentModule } from './../../components/layout-component/layout-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeatsPageRoutingModule } from './beats-page-routing.module';
import { BeatsPage } from './beats.page';

@NgModule({
  declarations: [BeatsPage],
  imports: [
    CommonModule,
    BeatsPageRoutingModule,
    LayoutComponentModule,
    CardBeatsComponentModule,
  ],
})
export class BeatsPageModule {}
