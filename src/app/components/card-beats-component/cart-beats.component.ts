import { BeatsInterface } from './../../interfaces/beats.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-cart-beats',
  templateUrl: './cart-beats.component.html',
  styleUrls: ['./cart-beats.component.css'],
})
export class CartBeatsComponent implements OnInit {
  @Input() public beat!: BeatsInterface;

  public constructor() {}

  public ngOnInit(): void {}
}
