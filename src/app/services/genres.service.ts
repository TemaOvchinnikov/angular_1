import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenresInterface } from '../interfaces/genres.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  private api: string;

  public constructor(private readonly http: HttpClient) {
    this.api = environment.api;
  }

  public findAll(): Observable<GenresInterface[]> {
    return this.http.get<GenresInterface[]>(`${this.api}/genres.json`);
  }
}
