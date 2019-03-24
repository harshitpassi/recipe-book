import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() clickedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Prawn Salad', 'This is a test prawn salad.',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg'),
     new Recipe('New Prawn Salad', 'This is a new test prawn salad.',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  sendClickDetails(recipe: Recipe) {
    this.clickedRecipe.emit(recipe);
  }

}
