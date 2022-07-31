import { AlbumsService } from './../../services/albums.service';
import { AlbumsInterface } from './../../interfaces/albums.interface';
import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'page-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.css'],
})
export class AlbumsPage implements OnInit {
  public albums!: AlbumsInterface[];
  public title?: string | Type<Resolve<string>>;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly albumsService: AlbumsService,
  ) {}

  public ngOnInit(): void {
    this.title = this.route.parent?.routeConfig?.title;
    this.albumsService
      .findAll()
      //.pipe(map((albums) => albums.filter((album) => album.id === 1)))
      //.pipe(map((albums) => albums.filter((album) => album.year === 2022)))
      //.pipe(map((albums) => albums.filter((album) => album.genre === 1)))
      .subscribe((data: AlbumsInterface[]) => (this.albums = data));
  }
}
