import { Component, OnInit, Input } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { CheckoutService } from '../../services/checkout.service';
import { Basket } from '../../basket';
import { ApiService } from '../../services/api.service';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  value = "";
  title = "Welcome to StayAtHome!";
  submitted = false;

  basketModel = new Basket({ "Fish": true, "Chicken": false }, {}, {}, {}, {});

  ingredient = {};
  ingredientKeys = [];

  constructor(
    private ingredientService: IngredientService,
    private checkoutService: CheckoutService,
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    // this.ingredient = this._ingredientService.getIngredients();
    // for (let i = 0; i < this.ingredient.length; i++) {
    //   this.ingredientKeys[i] = Object.keys(this.ingredient[i])[0];
    // }
    this.ingredientService.getIngredients()
      .subscribe(data => {
        this.ingredient = data;
        console.log(this.ingredient[0]);
        this.ingredientKeys = Object.keys(this.ingredient);
        console.log(this.ingredientKeys);
      });

  }

  onSubmit() {
    this.submitted = true;
    this.checkoutService.checkout(this.basketModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )

    // test if api is working with hard code
    this.apiService.getRecipeByIngredients('apple,flour')
      .subscribe(
        data => console.log('Here is your recipe', data),
        error => console.log('Error!', error)
      )
  }

}
