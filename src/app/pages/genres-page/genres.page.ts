import { map } from 'rxjs';
import { AlbumsService } from './../../services/albums.service';
import { Resolve, ActivatedRoute, ParamMap } from '@angular/router';
import { AlbumsInterface } from './../../interfaces/albums.interface';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'page-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.css'],
})
export class GenresPage implements OnInit {
  public albums!: AlbumsInterface[];
  public title?: string | Type<Resolve<string>>;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly albumsService: AlbumsService,
  ) {}

  public ngOnInit(): void {
    this.title = this.route.parent?.routeConfig?.title;

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.findOne(+params.get('genre')!);
    });
  }

  private findOne(genre: number) {
    this.albumsService
      .findAll()
      .pipe(
        map((albums: AlbumsInterface[]) =>
          albums.filter((album: AlbumsInterface) => album.genre === genre),
        ),
      )
      .subscribe((data: AlbumsInterface[]) => (this.albums = data));
  }
}
