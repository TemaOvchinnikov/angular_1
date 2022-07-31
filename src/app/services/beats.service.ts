import { BeatsInterface } from './../interfaces/beats.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BeatsService {
  private api: string;

  public constructor(private readonly http: HttpClient) {
    this.api = environment.api;
  }

  public findAll(): Observable<BeatsInterface[]> {
    return this.http.get<BeatsInterface[]>(`${this.api}/beats.json`);
  }
}
