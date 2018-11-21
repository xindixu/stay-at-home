import { Component, OnInit } from '@angular/core';
import { KeepsearchService } from '../../services/keepsearch.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  id: string;
  data: any[];

  constructor(
    private keepsearchService: KeepsearchService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.keepsearchService.currentSearch
      .subscribe(search => {
        this.id = search;
      })
    this.getRecipeDetail();
  }

  getRecipeDetail() {
    /*{vegetarian: false, vegan: false, glutenFree: false, dairyFree: true, veryHealthy: false, …}aggregateLikes: 225analyzedInstructions: [{…}]cheap: falsecookingMinutes: 10creditText: "Feed Me Phoebe"creditsText: "Feed Me Phoebe"cuisines: []dairyFree: truediets: ["dairy free"]dishTypes: ["side dish"]extendedIngredients: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]gaps: "no"glutenFree: falsehealthScore: 46id: 479101image: "https://spoonacular.com/recipeImages/479101-556x370.jpg"imageType: "jpg"instructions: "Cut the florets off the stems and and then chop them into tiny florets. You can also chop up the stems into tiny pieces if you want. You should have about 6 cups of chopped cauliflower. In a large skillet heat 2 tablespoons of olive oil over medium-high heat. Add the cauliflower, 1 teaspoon of salt, rosemary, and sumac. Sauté until cauliflower is tender and starts to brown a bit, stirring as necessary, about 15 minutes. You can also add a bit of olive oil if the pan starts to get too dry or the cauliflower is starting to stick. Meanwhile, in a small skillet, toast the pinenuts over medium heat until golden brown. Set aside. Heat the remaining 2 tablespoons of olive oil in the same pan. Once oil is shimmering, toss in the breadcrumbs and stir, toasting the breadcrumbs. Season with a pinch of kosher salt and a few turns of freshly ground black pepper. Remove from the heat and toss in half of the chopped parsley. When cauliflower is done, remove from the heat and season to taste with freshly ground black pepper and a pinch or so of salt if necessary. Toss in the toasted pine nuts, the chopped raisins, and the remaining parsley. When ready to serve, sprinkle the top with the toasted breadcrumbs and some pecorino."ketogenic: falselowFodmap: falseoccasions: []preparationMinutes: 10pricePerServing: 199.25readyInMinutes: 20servings: 4sourceName: "Feed Me Phoebe"sourceUrl: "http://feedmephoebe.com/2013/11/job-food52s-pan-roasted-cauliflower/"spoonacularScore: 97spoonacularSourceUrl: "https://spoonacular.com/on-the-job-pan-roasted-cauliflower-from-food52-479101"sustainable: falsetitle: "On the Job: Pan Roasted Cauliflower From Food52"vegan: falsevegetarian: falseveryHealthy: falseveryPopular: falseweightWatcherSmartPoints: 9whole30: falsewinePairing: {pairedWines: Array(0), pairingText: "", productMatches: Array(0)}__proto__: Object
    */
    this.apiService.getRecipeById(this.id)
      .subscribe(
        data => {
          this.data = data;
          console.log('Recipe detail with id', data);
        },
        error => console.log('Error!', error)
      )
  }

}
