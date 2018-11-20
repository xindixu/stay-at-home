import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class IngredientService {

	private _url: string = "/assets/data/ingredients.json";

	constructor(private _http: HttpClient) {
		this.getIngredients().subscribe(data => {
			console.log(data)
		});
	}

	getIngredients() {
  // 	return  [
  //   {"meat": ["Fish", "Chicken", "Ground Beef", "Beef", "Pork"]},
  //   {"vegetable": ["Onion", "Lettuce", "Broccoli", "Spinach", "Bok Choy", "Carrot"]}
  // ];
		 return this._http.get(this._url);

	}
}
