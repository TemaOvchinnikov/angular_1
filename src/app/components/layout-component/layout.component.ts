import { Resolve } from '@angular/router';
import { Component, Input, OnInit, Type } from '@angular/core';

@Component({
  selector: 'component-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  @Input() public title?: string | Type<Resolve<string>>;

  public constructor() {}

  public ngOnInit(): void {}
}
