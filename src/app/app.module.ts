import { BeatsPageModule } from './pages/beats-page/beats-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsService } from './services/albums.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsPageModule } from './pages/albums-page/albums-page.module';
import { AlbumPageModule } from './pages/album-page/album-page.module';
import { YearsPageModule } from './pages/years-page/years-page.module';
import { GenresPageModule } from './pages/genres-page/genres-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AlbumsPageModule,
    AlbumPageModule,
    BeatsPageModule,
    GenresPageModule,
    YearsPageModule,
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
