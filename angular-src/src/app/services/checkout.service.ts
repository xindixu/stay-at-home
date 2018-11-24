import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Basket } from '../basket';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  _url = '/checkout';
	//_url = 'http://localhost:8080/checkout';

 	constructor(private _http: HttpClient) { }

 	checkout(basket: Basket) {
 		return this._http.post<any>(this._url, basket);
 	}
}
