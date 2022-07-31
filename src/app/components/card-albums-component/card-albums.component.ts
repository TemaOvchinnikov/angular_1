import { AlbumsInterface } from './../../interfaces/albums.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-card-albums',
  templateUrl: './card-albums.component.html',
  styleUrls: ['./card-albums.component.css'],
})
export class CardAlbumsComponent implements OnInit {
  @Input() public album!: AlbumsInterface;

  public constructor() {}

  public ngOnInit(): void {}
}
