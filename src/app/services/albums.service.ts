import { AlbumsInterface } from './../interfaces/albums.interface';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private api: string;

  public constructor(private readonly http: HttpClient) {
    this.api = environment.api;
  }

  public findAll(): Observable<AlbumsInterface[]> {
    return this.http.get<AlbumsInterface[]>(`${this.api}/albums.json`);
  }
}
