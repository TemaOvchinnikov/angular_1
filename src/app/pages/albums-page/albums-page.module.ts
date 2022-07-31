import { CardAlbumsComponentModule } from './../../components/card-albums-component/card-albums-component.module';
import { LayoutComponentModule } from './../../components/layout-component/layout-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsPageRoutingModule } from './albums-page-routing.module';
import { AlbumsPage } from './albums.page';

@NgModule({
  declarations: [AlbumsPage],
  imports: [
    CommonModule,
    AlbumsPageRoutingModule,
    LayoutComponentModule,
    CardAlbumsComponentModule,
  ],
  exports: [AlbumsPage],
})
export class AlbumsPageModule {}
