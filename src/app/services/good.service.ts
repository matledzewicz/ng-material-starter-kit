import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoodModel } from '../models/good.model';

@Injectable({ providedIn: 'root' })
export class GoodService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<GoodModel[]> {
    return this._httpClient.get<GoodModel[]>(
      'https://fakestoreapi.com/products'
    );
  }
}
