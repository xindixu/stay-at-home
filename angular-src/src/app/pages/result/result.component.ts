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
    this.apiService.getRecipeByIngredients(this.query)
      .subscribe(
        data => {
          console.log('Here is your recipe', data);
        },
        error => console.log('Error!', error)
      )
  }

}
