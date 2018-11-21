import { Component, OnInit } from '@angular/core';
import { KeepsearchService } from '../../services/keepsearch.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.keepsearchService.currentSearch
      .subscribe(search => {
        this.query = search;
      })
    this.getSearchResult();
  }

  getSearchResult(){
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
          console.log('Recipe with ingredients', data);
        },
        error => console.log('Error!', error)
      )

  }

  getRecipeDetail(id:string){
    this.keepsearchService.updateSearch(id);
    this.router.navigate(['/recipe']);
  }

}
