import { CardAlbumsComponentModule } from './../../components/card-albums-component/card-albums-component.module';
import { LayoutComponentModule } from './../../components/layout-component/layout-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPageRoutingModule } from './album-page-routing.module';
import { AlbumPage } from './album.page';

@NgModule({
  declarations: [AlbumPage],
  imports: [
    CommonModule,
    AlbumPageRoutingModule,
    LayoutComponentModule,
    CardAlbumsComponentModule,
  ],
})
export class AlbumPageModule {}
