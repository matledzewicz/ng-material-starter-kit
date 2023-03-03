import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoodModel } from '../models/good.model';

@Injectable({ providedIn: 'root' })
export class BadService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<GoodModel[]> {
    return this._httpClient.get<any[]>('https://fakestoreapi.com/products');
  }

  getAllProducts(): Observable<any[]> {
    return this._httpClient.get<any[]>('https://fakestoreapi.com/products');
  }
}
