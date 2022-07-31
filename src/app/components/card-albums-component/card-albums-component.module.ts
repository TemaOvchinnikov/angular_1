import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAlbumsComponent } from './card-albums.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardAlbumsComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardAlbumsComponent],
})
export class CardAlbumsComponentModule {}
