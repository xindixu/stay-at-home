// example: https://malcoded.com/posts/angular-backend-express
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
    return this.http.get<Recipe[]>('/api/findByIngredients/' + ingredient);
  }
  getRecipeById(id: string): Observable<Recipe[]> {
    // local: http://localhost:8080/api/getRecipeById
    return this.http.get<Recipe[]>('/api/getRecipeById/' + id);
  }

  getVideoByIngredients(ingredient: string): Observable<any> {
    // local: http://localhost:8080/api/findByIngredients
    return this.http.get('/api/getVideoByIngredients/' + ingredient);
  }

  getAnswerByQuestion(text:string): Observable<any> {
    return this.http.get('/api/chatbot/' + text);
  }
}
