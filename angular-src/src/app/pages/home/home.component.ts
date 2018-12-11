import { Component, OnInit } from "@angular/core";
import { Basket } from "../../basket";
import { KeepsearchService } from "../../services/keepsearch.service";
import { Router } from "@angular/router";
import { VideoSearchComponent } from "../../components/video-search/video-search.component";
import { IngredientSearchComponent } from "../../components/ingredient-search/ingredient-search.component";

export interface Tag {
  name: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  value = "";
  title = "Welcome to StayAtHome!";

  basketModel = new Basket({}, {}, {}, {}, {});
  ingredient = {};
  ingredientKeys = [];

  query: string;

  constructor(
    private router: Router,
    private keepsearchService: KeepsearchService
  ) {}

  ngOnInit() {}
}
