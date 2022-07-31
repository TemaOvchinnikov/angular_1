import { YearsInterface } from './../../interfaces/years.interface';
import { YearsService } from './../../services/years.service';
import { GenresService } from './../../services/genres.service';
import { GenresInterface } from './../../interfaces/genres.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  public genres!: GenresInterface[];
  public years!: YearsInterface[];

  public constructor(
    private readonly genresService: GenresService,
    private readonly yearsService: YearsService,
  ) {}

  public ngOnInit(): void {
    this.genresService
      .findAll()
      .subscribe((data: GenresInterface[]) => (this.genres = data));

    this.yearsService
      .findAll()
      .subscribe((data: YearsInterface[]) => (this.years = data));
  }
}
