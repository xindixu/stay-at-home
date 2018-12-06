import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { CheckoutService } from '../../services/checkout.service';
import { Basket } from '../../basket';
import { KeepsearchService } from '../../services/keepsearch.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss']
})
export class IngredientSearchComponent implements OnInit {

  basketModel = new Basket({}, {}, {}, {}, {});

  ingredient = {};
  ingredientKeys = [];

  query: string;

  constructor(
    private ingredientService: IngredientService,
    private checkoutService: CheckoutService,
    private keepsearchService: KeepsearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ingredientService.getIngredients()
      .subscribe(data => {
        this.ingredient = data;
        //console.log(this.ingredient[0]);
        this.ingredientKeys = Object.keys(this.ingredient);
        //console.log(this.ingredientKeys);
      });
  }

  onSubmit() {
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
