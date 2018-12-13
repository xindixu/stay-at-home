import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { CheckoutService } from '../../services/checkout.service';
import { Basket } from '../../basket';
import { KeepsearchService } from '../../services/keepsearch.service';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  header: string;
  ingredients: Array<string>;
}

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss']
})

export class IngredientSearchComponent implements OnInit {

  basketModel = new Basket({}, {}, {}, {}, {});

  tiles: Tile[] = [
    // {header: 'One', cols: 2, rows: 1, color: 'lightblue', ingredients: ['ah','dhdfh']},
    // {header: 'Two', cols: 2, rows: 1, color: 'lightgreen', ingredients: ['ah']},
    // {header: 'Three', cols: 2, rows: 1, color: 'lightpink', ingredients: ['ah']},
    // {header: 'Four', cols: 2, rows: 1, color: '#DDBDF1', ingredients: ['ah']},
  ];

  ingredient = {};
  ingredientKeys = [];

  cols_breakpoint;

  query: string;

  constructor(
    private ingredientService: IngredientService,
    private checkoutService: CheckoutService,
    private keepsearchService: KeepsearchService,
    private router: Router
  ) { }

  ngOnInit() {

    if (window.innerWidth >= 1200) {
      this.cols_breakpoint = 1;
    }
    else if (window.innerWidth >= 600) {
      this.cols_breakpoint = 2;
    }
    else {
      this.cols_breakpoint = 3;
    }


    this.ingredientService.getIngredients()
      .subscribe(data => {
        this.ingredient = data;
        //console.log(this.ingredient[0]);
        this.ingredientKeys = Object.keys(this.ingredient);
        for (var i = 0; i < this.ingredientKeys.length; i++) {
          console.log(this.ingredient[this.ingredientKeys[i]]);
          let newTile = {header: this.ingredientKeys[i],
                         cols: 5, rows: 4, color: 'rgba(143,225,9,0)',
                         ingredients: this.ingredient[this.ingredientKeys[i]]};

          this.tiles.push(newTile);
        }
        //console.log(this.ingredientKeys);
      });
  }

  onResize(event) {
    if (event.target.innerWidth >= 1200) {
      this.cols_breakpoint = 1;
    }
    else if (event.target.innerWidth >= 600) {
      this.cols_breakpoint = 2;
    }
    else {
      this.cols_breakpoint = 3;
    }
  }

  // is it possible to connect to the user, and recorc the search that was just sent in?
  // just import the this.basketModel to array, and then make a dictionary where the key is the ingredient and value is the number of times searched
  onSubmit() {
    // .subscribe looks at the checkout event, wait until it is sucessful, then executes the code underneath
    this.checkoutService.checkout(this.basketModel)
      .subscribe(
        data => {
          //console.log('Success!', data);
          this.keepsearchService.updateSearch(this.basketModel.stringify());
          //this.keepsearchService.updateSearch(JSON.stringify(this.basketModel));
          this.router.navigate(['/result']);

        },
        error => console.error('Error!', error)
      )
  }

}
