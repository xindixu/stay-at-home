// example: https://malcoded.com/posts/angular-backend-express
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

export interface Recipe {
  title: string,
  image: string,
  usedIngredientCount: number
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRecipeByIngredients(ingredient: string): Observable<Recipe[]> {
    // local: http://localhost:8080/api/findByIngredients
    return this.http.get<Recipe[]>('http://localhost:8080/api/findByIngredients/' + ingredient);
  }
}
