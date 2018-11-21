// URL encoding: https://stackoverflow.com/questions/6182356/what-is-2c-in-a-url
const express = require('express');
const router = express.Router();
const unirest = require('unirest');
const url = require('url');
const querystring = require('querystring');


const headers = {
  "X-Mashape-Key": "QbMSHHNOeumsh5jqIwu8zFSLKI6pp1Kw1qljsnfrSkq6hMGXns",
  "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
};

const endpoint = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/';

router.get('/findByIngredients/:key', (req, res) => {
  const key = req.params.key;
  const pathname = 'recipes/findByIngredients';
  const params = new URLSearchParams({
    ingredients: key, //'apples,flour,sugar',
    number: '2', // 5 - in production, 1 - in dev to save the quota
    ranking: '1' // 1 - maximize used ingredients, 2 - minimize missing ingredients
  });
  const path = endpoint + pathname + '?' + params.toString();

  unirest.get(path)
    .header("X-Mashape-Key", "QbMSHHNOeumsh5jqIwu8zFSLKI6pp1Kw1qljsnfrSkq6hMGXns")
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
    .end(function(response) {
      console.log(response.status, response.headers, response.body);
      // save the response to result
      res.send(response.body);
    });
});

router.get('/getRecipeById/:key', (req, res) => {
  // id for test: 1016387
  const key = req.params.key;
  const path = `${endpoint}recipes/${key}/information`;
  // raw: https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information
  unirest.get(path)
    .header("X-Mashape-Key", "QbMSHHNOeumsh5jqIwu8zFSLKI6pp1Kw1qljsnfrSkq6hMGXns")
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
    .end(function(result) {
      console.log(result.status, result.headers, result.body);
      res.send(result.body);
    });
})

function getQueryFromRawUrl() {
  // to get the query - coding purposes only
  let rawUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=1&ranking=1";
  let parsedUrl = require('url').parse(rawUrl, true);
  /*
    parsedUrl Url {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'spoonacular-recipe-food-nutrition-v1.p.mashape.com',
    port: null,
    hostname: 'spoonacular-recipe-food-nutrition-v1.p.mashape.com',
    hash: null,
    search: '?ingredients=apples%2Cflour%2Csugar&number=1&ranking=1',
    query:
     [Object: null prototype] { ingredients: 'apples,flour,sugar', number: '1', ranking: '1' },
    pathname: '/recipes/findByIngredients',
    path:
     '/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=1&ranking=1',
    href:
     'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=1&ranking=1' }
  */

}

function recipes_search(query) {
  const optionalParameters = {
    "cuisine": "",
    "diet": "vegetarian",
    "excludeIngredients": "coconut",
    "intolerances": ["egg", "gluten"],
    "number": 10, // number of result to return (0-10)
    "offset": 0, // number of results to skip (0-900)
    "type": "main course", // type of the recipe [main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink]
    "instructionsRequired": true //Whether the recipes must have instructions.
  };
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query=burger&type=main+course")
    .header("X-Mashape-Key", "QbMSHHNOeumsh5jqIwu8zFSLKI6pp1Kw1qljsnfrSkq6hMGXns")
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function(result) {
      console.log(result.status, result.headers, result.body);
    });
}

function guessNutritionByDishName() {
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/guessNutrition?title=Spaghetti+Aglio+et+Olio")
    .header("X-Mashape-Key", "QbMSHHNOeumsh5jqIwu8zFSLKI6pp1Kw1qljsnfrSkq6hMGXns")
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
    .end(function(result) {
      console.log(result.status, result.headers, result.body);
    });
}

module.exports = router;
