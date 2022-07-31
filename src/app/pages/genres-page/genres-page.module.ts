import { CardAlbumsComponentModule } from './../../components/card-albums-component/card-albums-component.module';
import { LayoutComponentModule } from './../../components/layout-component/layout-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresPageRoutingModule } from './genres-page-routing.module';
import { GenresPage } from './genres.page';

@NgModule({
  declarations: [GenresPage],
  imports: [
    CommonModule,
    GenresPageRoutingModule,
    LayoutComponentModule,
    CardAlbumsComponentModule,
  ],
  exports: [GenresPage],
})
export class GenresPageModule {}
