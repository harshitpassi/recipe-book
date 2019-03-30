import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Prawn Salad', 'This is a test prawn salad.',
         'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg'),
         new Recipe('New Prawn Salad', 'This is a new test prawn salad.',
         'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg')
      ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}
