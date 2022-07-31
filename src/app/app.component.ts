import { Component, OnInit } from '@angular/core';
import { AlbumsInterface } from './interfaces/albums.interface';
import { AlbumsService } from './services/albums.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public albums!: AlbumsInterface[];

  public constructor(private readonly albumsService: AlbumsService) {}

  public ngOnInit(): void {
    this.albumsService
      .findAll()
      .subscribe((data: AlbumsInterface[]) => (this.albums = data));
  }
}
