import { BeatsService } from './../../services/beats.service';
import { BeatsInterface } from './../../interfaces/beats.interface';
import { ActivatedRoute, Resolve } from '@angular/router';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'page-beats',
  templateUrl: './beats.page.html',
  styleUrls: ['./beats.page.css'],
})
export class BeatsPage implements OnInit {
  public beats!: BeatsInterface[];
  public title?: string | Type<Resolve<string>>;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly beatsService: BeatsService,
  ) {}

  public ngOnInit(): void {
    this.title = this.route.parent?.routeConfig?.title;
    this.beatsService
      .findAll()
      .subscribe((data: BeatsInterface[]) => (this.beats = data));
  }
}
