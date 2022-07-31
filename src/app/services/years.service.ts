import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YearsInterface } from '../interfaces/years.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YearsService {
  private api: string;

  public constructor(private readonly http: HttpClient) {
    this.api = environment.api;
  }

  public findAll(): Observable<YearsInterface[]> {
    return this.http.get<YearsInterface[]>(`${this.api}/years.json`);
  }
}
