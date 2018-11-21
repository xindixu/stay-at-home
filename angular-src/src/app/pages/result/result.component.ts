import { Component, OnInit } from '@angular/core';
import { KeepsearchService } from '../../services/keepsearch.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  query: string;
  data: any[];

  constructor(
    private keepsearchService: KeepsearchService,
    private apiService: ApiService,

  ) { }

  ngOnInit() {
    this.keepsearchService.currentSearch
      .subscribe(search => {
        this.query = search;
      })
    this.getSearchResult();
  }

  getSearchResult(){
    console.log("query", this.query);
    // test if api is working with hard code

    // [{},{},{}] length depends on option passed to apiin backend
    /* 0:
    id: 1047288
    image: "https://spoonacular.com/recipeImages/1047288-312x231.jpg"
    imageType: "jpg"
    likes: 1
    missedIngredientCount: 5
    title: "How to Make Crispy Air Fryer French Fries"
    usedIngredientCount: 2
    */

    this.apiService.getRecipeByIngredients(this.query)
      .subscribe(
        data => {
          this.data = data;
          console.log('Here is your recipe with ingredients', data);
        },
        error => console.log('Error!', error)
      )

  }

  getRecipeDetail(id:string){
    this.apiService.getRecipeById(id)
      .subscribe(
        data => {
          console.log('Recipe detail got from your id', data);
        },
        error => console.log('Error!', error)
      )
  }

}
