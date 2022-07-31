import { TemplateTitleStrategy } from './classes/template-title.strategy';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule,
      ),
  },
  {
    path: 'albums',
    title: 'Albums',
    loadChildren: () =>
      import('./pages/albums-page/albums-page.module').then(
        (m) => m.AlbumsPageModule,
      ),
  },
  {
    path: 'album/:id',
    title: 'Album',
    loadChildren: () =>
      import('./pages/album-page/album-page.module').then(
        (m) => m.AlbumPageModule,
      ),
  },
  {
    path: 'beats',
    title: 'Beats',
    loadChildren: () =>
      import('./pages/beats-page/beats-page.module').then(
        (m) => m.BeatsPageModule,
      ),
  },
  {
    path: 'genre/:genre',
    title: 'Genre',
    loadChildren: () =>
      import('./pages/genres-page/genres-page.module').then(
        (m) => m.GenresPageModule,
      ),
  },
  {
    path: 'year/:year',
    title: 'Year',
    loadChildren: () =>
      import('./pages/years-page/years-page.module').then(
        (m) => m.YearsPageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TemplateTitleStrategy],
})
export class AppRoutingModule {}
