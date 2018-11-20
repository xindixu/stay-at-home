import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { CheckoutService } from '../../services/checkout.service';
import { Basket } from '../../basket';
import { KeepsearchService } from '../../services/keepsearch.service';
import { Router } from '@angular/router';


export interface Tag {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  value = "";
  title = "Welcome to StayAtHome!";

  basketModel = new Basket({}, {}, {}, {}, {});

  ingredient = {};
  ingredientKeys = [];

  query: string;

  constructor(
    private ingredientService: IngredientService,
    private checkoutService: CheckoutService,
    private router: Router,
    private keepsearchService: KeepsearchService
  ) { }

  ngOnInit() {
    // this.ingredient = this._ingredientService.getIngredients();
    // for (let i = 0; i < this.ingredient.length; i++) {
    //   this.ingredientKeys[i] = Object.keys(this.ingredient[i])[0];
    // }

    this.ingredientService.getIngredients()
      .subscribe(data => {
        this.ingredient = data;
        //console.log(this.ingredient[0]);
        this.ingredientKeys = Object.keys(this.ingredient);
        //console.log(this.ingredientKeys);
      });

  }


  onSubmit() {
    /*
    Justin: would you possibly restructure the return value from the checkbox to
    be something like ['apple','fish','chicken']
    check this one
    https://www.npmjs.com/package/ng2-checklist
    and i need to sleep now :(
    you were snooooorrring
    */
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
