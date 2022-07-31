import { map } from 'rxjs';
import { AlbumsService } from './../../services/albums.service';
import { Resolve, ActivatedRoute } from '@angular/router';
import { AlbumsInterface } from './../../interfaces/albums.interface';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'page-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.css'],
})
export class AlbumPage implements OnInit {
  private id!: number;
  public albums!: AlbumsInterface[];
  public title?: string | Type<Resolve<string>>;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly albumsService: AlbumsService,
  ) {}

  public ngOnInit(): void {
    this.title = this.route.parent?.routeConfig?.title;
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.albumsService
      .findAll()
      .pipe(map((albums) => albums.filter((album) => album.id === this.id)))
      .subscribe((data: AlbumsInterface[]) => (this.albums = data));
  }
}
