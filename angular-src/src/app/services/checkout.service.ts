import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Basket } from '../basket';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

	_url = 'http://localhost:3000/checkout';

 	constructor(private _http: HttpClient) { }

 	checkout(basket: Basket) {
 		return this._http.post<any>(this._url, basket);
 	}
}
